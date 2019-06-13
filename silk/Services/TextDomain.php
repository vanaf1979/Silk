<?php
/**
 * Register textdomain for theme translation.
 *
 * @package    FunctionsPhp
 * @subpackage FunctionsPhp/Services
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;


final class TextDomain implements Service, Registerable {

    /**
     * the constructor.
     */
    public function __construct() { }


    /**
     * register.
     *
     * Register hooks with WordPress.
     *
     * @return void
     */
    public function register() : void {

        \add_action( 'plugins_loaded' , array( $this , 'load_plugin_textdomain' ) , 1 );

    }


    /**
     * load_plugin_textdomain.
     *
     * Register textdomain for plugin translation.
     *
     * @return void
     */
    public function load_plugin_textdomain() : void {

        \load_theme_textdomain( TEXT_DOMAIN , THEME_PATH . '/languages' );

    }

}