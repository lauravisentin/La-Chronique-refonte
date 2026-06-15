<?php
/**
 * Plugin Name: La Chronique - Animation d'accueil
 * Description: Animation d'accueil autonome pour Elementor, avec champs ACF et assets de secours.
 * Version: 1.2.0
 * Author: La Chronique
 * Text Domain: accueil-anim
 */

if (!defined('ABSPATH')) {
    exit;
}

define('HA_ANIM_VERSION', '1.2.0');
define('HA_ANIM_URL', plugin_dir_url(__FILE__));

function ha_anim_register_assets() {
    wp_register_style('ha-accueil-anim', HA_ANIM_URL . 'accueil-anim.css', array(), HA_ANIM_VERSION);
    wp_register_script('ha-accueil-anim', HA_ANIM_URL . 'accueil-anim.js', array(), HA_ANIM_VERSION, true);
}
add_action('wp_enqueue_scripts', 'ha_anim_register_assets');

function ha_anim_field($field_name, $default = null) {
    if (!function_exists('get_field')) {
        return $default;
    }

    $value = get_field($field_name, get_queried_object_id());
    return $value === null || $value === '' ? $default : $value;
}

function ha_anim_image_value($field_name, $fallback = '', $fallback_alt = '') {
    $value = ha_anim_field($field_name);
    $url = '';
    $alt = '';

    if (is_array($value)) {
        $url = isset($value['url']) ? $value['url'] : '';
        $alt = isset($value['alt']) ? $value['alt'] : '';
    } elseif (is_numeric($value)) {
        $url = wp_get_attachment_image_url((int) $value, 'full');
        $alt = get_post_meta((int) $value, '_wp_attachment_image_alt', true);
    } elseif (is_string($value)) {
        $url = $value;
    }

    return array(
        'url' => $url ? $url : ($fallback ? HA_ANIM_URL . 'assets/' . $fallback : ''),
        'alt' => $alt ? $alt : $fallback_alt,
    );
}

function ha_anim_bool_value($field_name, $default = true) {
    $value = ha_anim_field($field_name, $default);
    return filter_var($value, FILTER_VALIDATE_BOOLEAN);
}

function ha_anim_position_value($field_name) {
    $positions = array('center', 'top', 'bottom', 'left', 'right');
    $value = ha_anim_field($field_name, 'center');
    return in_array($value, $positions, true) ? $value : 'center';
}

function ha_anim_number_value($field_name, $default, $min, $max) {
    $value = (float) ha_anim_field($field_name, $default);
    return max($min, min($max, $value));
}

function ha_anim_shortcode() {
    static $instance = 0;
    $instance++;

    wp_enqueue_style('ha-accueil-anim');
    wp_enqueue_script('ha-accueil-anim');

    $facade = ha_anim_image_value('ha_facade_image', 'facade-night.webp', 'Façade du Restaurant La Chronique');
    $interior = ha_anim_image_value('ha_interior_image', 'dining-room-press.jpg', 'Salle du Restaurant La Chronique');
    $logo = ha_anim_image_value('ha_logo_image', 'RestaurantChronique.svg', 'Restaurant La Chronique');
    $michelin = ha_anim_image_value('ha_michelin_image', 'michelin-2025.png', 'Recommandé par le Guide Michelin 2025');
    $arrow = ha_anim_image_value('ha_arrow_image');
    $animate_arrow = ha_anim_bool_value('ha_animate_arrow', true);
    $show_michelin = ha_anim_bool_value('ha_show_michelin', true);
    $mobile_transition = ha_anim_bool_value('ha_enable_mobile_transition', true);
    $arrow_size = ha_anim_number_value('ha_arrow_size', 24, 8, 120);
    $logo_size = ha_anim_number_value('ha_logo_size', 720, 160, 1400);

    ob_start();
    if (!wp_style_is('ha-accueil-anim', 'done')) {
        wp_print_styles(array('ha-accueil-anim'));
    }
    ?>
    <section
        id="<?php echo esc_attr('ha-accueil-anim-' . $instance); ?>"
        class="<?php echo esc_attr('ha' . ($animate_arrow ? ' ha--arrow-animated' : '')); ?>"
        data-ha-anim
        data-ha-mobile-transition="<?php echo $mobile_transition ? 'true' : 'false'; ?>"
        style="<?php
            echo esc_attr(
                '--ha-facade-position:' . ha_anim_position_value('ha_facade_position_desktop') . ';' .
                '--ha-interior-position:' . ha_anim_position_value('ha_interior_position_desktop') . ';' .
                '--ha-facade-position-mobile:' . ha_anim_position_value('ha_facade_position_mobile') . ';' .
                '--ha-interior-position-mobile:' . ha_anim_position_value('ha_interior_position_mobile') . ';' .
                '--ha-arrow-size:' . $arrow_size . 'px;' .
                '--ha-logo-size:' . $logo_size . 'px;'
            );
        ?>"
    >
        <div class="ha__stage">
            <div class="ha__layer ha__layer--facade" style="<?php echo esc_attr('--ha-image:url("' . esc_url($facade['url']) . '")'); ?>" role="img" aria-label="<?php echo esc_attr($facade['alt']); ?>"></div>
            <div class="ha__layer ha__layer--interior" style="<?php echo esc_attr('--ha-image:url("' . esc_url($interior['url']) . '")'); ?>" role="img" aria-label="<?php echo esc_attr($interior['alt']); ?>"></div>
            <div class="ha__vignette" aria-hidden="true"></div>
            <div class="ha__logo" aria-hidden="true">
                <img class="ha__logo-image" src="<?php echo esc_url($logo['url']); ?>" alt="">
            </div>
            <?php if ($arrow['url']) : ?>
                <div class="ha__arrow" aria-hidden="true">
                    <img class="ha__arrow-image" src="<?php echo esc_url($arrow['url']); ?>" alt="">
                </div>
            <?php endif; ?>
            <?php if ($show_michelin) : ?>
                <div class="ha__badge">
                    <img class="ha__badge-image" src="<?php echo esc_url($michelin['url']); ?>" alt="<?php echo esc_attr($michelin['alt']); ?>">
                </div>
            <?php endif; ?>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode('accueil_anim', 'ha_anim_shortcode');

function ha_anim_register_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    $fields = array();
    $images = array(
        'facade' => 'Image façade',
        'interior' => 'Image intérieure',
        'logo' => 'Logo',
        'michelin' => 'Image Michelin',
        'arrow' => 'Image de la flèche',
    );

    foreach ($images as $name => $label) {
        $fields[] = array(
            'key' => 'field_ha_' . $name . '_image',
            'label' => $label,
            'name' => 'ha_' . $name . '_image',
            'type' => 'image',
            'return_format' => 'array',
            'preview_size' => 'medium',
        );
    }

    $fields[] = array(
        'key' => 'field_ha_animate_arrow',
        'label' => 'Animer la flèche',
        'name' => 'ha_animate_arrow',
        'type' => 'true_false',
        'default_value' => 1,
        'ui' => 1,
    );
    $fields[] = array(
        'key' => 'field_ha_arrow_size',
        'label' => 'Taille de la flèche',
        'name' => 'ha_arrow_size',
        'type' => 'number',
        'instructions' => 'Hauteur en pixels.',
        'default_value' => 24,
        'min' => 8,
        'max' => 120,
        'step' => 1,
        'append' => 'px',
    );
    $fields[] = array(
        'key' => 'field_ha_logo_size',
        'label' => 'Taille du logo SVG',
        'name' => 'ha_logo_size',
        'type' => 'number',
        'instructions' => 'Largeur initiale maximale en pixels.',
        'default_value' => 720,
        'min' => 160,
        'max' => 1400,
        'step' => 10,
        'append' => 'px',
    );
    $fields[] = array(
        'key' => 'field_ha_show_michelin',
        'label' => 'Afficher Michelin',
        'name' => 'ha_show_michelin',
        'type' => 'true_false',
        'default_value' => 1,
        'ui' => 1,
    );
    $fields[] = array(
        'key' => 'field_ha_enable_mobile_transition',
        'label' => 'Activer la transition mobile',
        'name' => 'ha_enable_mobile_transition',
        'type' => 'true_false',
        'instructions' => 'Désactivé: affiche une section mobile statique.',
        'default_value' => 1,
        'ui' => 1,
    );

    $position_choices = array(
        'center' => 'Centre',
        'top' => 'Haut',
        'bottom' => 'Bas',
        'left' => 'Gauche',
        'right' => 'Droite',
    );
    $position_fields = array(
        'facade_position_desktop' => 'Position façade - ordinateur',
        'interior_position_desktop' => 'Position intérieure - ordinateur',
        'facade_position_mobile' => 'Position façade - mobile',
        'interior_position_mobile' => 'Position intérieure - mobile',
    );

    foreach ($position_fields as $name => $label) {
        $fields[] = array(
            'key' => 'field_ha_' . $name,
            'label' => $label,
            'name' => 'ha_' . $name,
            'type' => 'select',
            'choices' => $position_choices,
            'default_value' => 'center',
            'return_format' => 'value',
        );
    }

    acf_add_local_field_group(array(
        'key' => 'group_ha_accueil_anim',
        'title' => 'Animation d’accueil',
        'fields' => $fields,
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ),
            ),
        ),
        'position' => 'normal',
        'style' => 'default',
    ));
}
add_action('acf/init', 'ha_anim_register_acf_fields');
