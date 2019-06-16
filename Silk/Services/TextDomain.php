<?php
/**
 * TextDomain
 * 
 * Register the plugin textdomain with WordPress.
 *
 * @package Silk
 * @subpackage Silk\Services
 * @author Vanaf1979 Stephan Nijman
 * @link https://vanaf1979.nl
 * @since 1.0.0
 * @license GPL-2.0+
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;


final class TextDomain implements Service, Registerable {

    /**
     * __construct.
     * 
     * @return void
     * @access public
     */
    public function __construct() : void { }


    /**
     * register.
     *
     * Register hooks with WordPress.
     * 
     * @uses add_action() https://developer.wordpress.org/reference/functions/add_action/
     *
     * @access public
     * @return void
     */
    public function register() : void {

        \add_action( 'plugins_loaded' , array( $this , 'load_plugin_textdomain' ) , 1 );

    }


    /**
     * load_plugin_textdomain.
     *
     * Register the plugin textdomain with WordPress.
     * 
     * @uses load_plugin_textdomain() https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
     *
     * @access public
     * @return void
     */
    public function load_plugin_textdomain() : void {

        \load_plugin_textdomain( SILK_DOMAIN , false , SILK_PATH . '/languages/' );

    }

}