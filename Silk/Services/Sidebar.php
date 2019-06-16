<?php
/**
 * Sidebar_Class
 * 
 * Enqueue editor sidebar styles and scripts.
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
use Silk\Lib\Conditional;


final class Sidebar implements Service, Registerable, Conditional {


    /**
     * __construct.
     * 
     * @return void
     * @access public
     */
    public function __construct( ) : void { }


    /**
     * is_needed.
     * 
     * Should this service bee initialized?
     * 
     * @uses is_admin() https://developer.wordpress.org/reference/functions/is_admin/
     * 
     * @static
     * @return bool
     */
    static function is_needed() : bool {

        return \is_admin() ? true : false;

    }


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

        \add_action( 'enqueue_block_editor_assets' , array( $this , 'enqueue_styles' ) );
        \add_action( 'enqueue_block_editor_assets' , array( $this , 'enqueue_scripts' ) );

    }


    /**
     * enqueue_styles.
     * 
     * Enqueue editor sidebar stylesheets.
     * 
     * @uses wp_enqueue_style() https://developer.wordpress.org/reference/functions/wp_enqueue_style/
     * 
     * @access public
     * @return void
     */
    public function enqueue_styles() : void {

        wp_enqueue_style( SILK_DOMAIN . '-sidebar' , SILK_PATH . 'dist/css/silk-sidebar.css' , array() , SILK_VERSION , 'all' );
    
    }


    /**
     * enqueue_scripts.
     * 
     * Enqueue editor sidebar scripts.
     * 
     * @uses wp_enqueue_script() https://developer.wordpress.org/reference/functions/wp_enqueue_script/
     * 
     * @access public
     * @return void
     */
    public function enqueue_scripts() : void {

        \wp_enqueue_script( SILK_DOMAIN . '-sidebar' ,  SILK_PATH . 'dist/js/silk-sidebar.js' , $this->dependancies , SILK_VERSION , 'all' );

    }

}