<?php
/**
 * MetaFields
 * 
 * Register meta fields with WordPress.
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


final class MetaFields implements Service, Registerable {

    /**
     * fields
     * 
     * Meta field names to register.
     *
     * @var array $fields
     * @access private
     */
    private $fields = array(
        'silk_g_browser_title',
        'silk_g_description',
        'silk_g_canonical',
        'silk_g_index_follow',
        'silk_fb_open_graph_type',
        'silk_fb_open_graph_title',
        'silk_fb_open_graph_description',
        'silk_fb_open_graph_image',
        'silk_tw_card_type',
        'silk_tw_author_handle',
        'silk_tw_title',
        'silk_tw_description',
        'silk_tw_image',
        'silk_s_type',
        'silk_s_title',
        'silk_s_description',
        'silk_s_image'
    );


    /**
     * __construct.
     * 
     * @access public
     */
    public function __construct() { }


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

        \add_action( 'init' , array( $this , 'register_meta_fields' ) , 1 );

    }


    /**
     * register_meta_fields.
     * 
     * Register meta fields with WordPress.
     * 
     * @uses register_meta() https://developer.wordpress.org/reference/functions/register_meta/
     * 
     * @access public
     * @return void
     */
    public function register_meta_fields() : void {

        $args = array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        );

        foreach( $this->fields as $field ) {

            \register_meta( 'post' , $field , $args );

        }
        
    }
    
}
