/**
 * External dependencies.
 */
import React from 'react'

/**
 * Local dependencies.
 */
import Modal from './modal.js'
import ViewGoogle from './view-google.js'
import ViewFacebook from './view-facebook.js'
import ViewTwitter from './view-twitter.js'
import ViewSchema from './view-schema.js'
import icons from '../icons/icons.js'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Panel, PanelBody, PanelRow, TabPanel, TextControl, TextareaControl, RadioControl } = wp.components;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;

/**
 * Sidebar component voor the gutenberg editor.
 *
 * @since 1.0.0
 * @author Vanaf1979 - Stephan Nijman http://vanaf1979.nl
 */
class Sidebar extends React.Component {
    
    constructor() {

        super()

        this.state = {
            
        }

        this.openModal = this.openModal.bind(this);

    }


    openModal() {

        this.props.toggleModalOpen()
        
    }


    render() {

        return (
            <Fragment>

                <PluginSidebarMoreMenuItem target="silk-sidebar" icon={icons.butterfly}>

                    {__("Silk seo", "silk")}

                </PluginSidebarMoreMenuItem>

                <PluginSidebar name="silk-sidebar" title={__("Silk SEO", "silk")} >

                    <Panel>

                        <PanelBody className="google" title="Google" icon="" initialOpen={ true }>

                            <PanelRow>

                                <button className="components-button is-button is-default is-large" onClick={this.openModal}>Edit meta values</button>

                            </PanelRow>

                        </PanelBody>
                    
                    </Panel>

                    <Panel>

                        <PanelBody className="facebook" title="Facebook" icon="" initialOpen={ false }>

                            <PanelRow>

                                <p>Facebook</p>

                            </PanelRow>

                        </PanelBody>
                    
                    </Panel>

                    <Panel>

                        <PanelBody className="twitter" title="Twitter" icon="" initialOpen={ false }>

                            <PanelRow>

                                <p>Twitter</p>

                            </PanelRow>

                        </PanelBody>
                    
                    </Panel>

                    <Panel>

                        <PanelBody className="schema" title="Schema" icon="" initialOpen={ false }>

                            <PanelRow>

                                <p>Schema.org</p>

                            </PanelRow>

                        </PanelBody>
                    
                    </Panel>

                </PluginSidebar>

                <Modal>
                
                    <TabPanel className="edit-post"
                        activeClass="active-tab"
                        onSelect={}
                        className="silk-tabs"
                        initialTabName="Google"
                        tabs={ [
                            {
                                name: 'Google',
                                title: 'Google',
                                className: 'google'
                            },
                            {
                                name: 'Facebook',
                                title: 'Facebook',
                                className: 'facebook'
                            },
                            {
                                name: 'Twitter',
                                title: 'Twitter',
                                className: 'twitter'
                            },
                            {
                                name: 'Schema',
                                title: 'Schema',
                                className: 'schema'
                            }]
                        }>
                        {
                            ( tab ) => { 
                                
                                if( tab.title == 'Google' ) {
                                    
                                    return ( <ViewGoogle/> )

                                } else if( tab.title == 'Facebook' ) {
                                    
                                    return ( <ViewFacebook/> )
                                    
                                } else if( tab.title == 'Twitter' ) {
                                    
                                    return ( <ViewTwitter/> )

                                } else if( tab.title == 'Schema' ) {
                                    
                                    return ( <ViewSchema/> )
                                    
                                }
                            }
                        }
                    </TabPanel>

                </Modal>

            </Fragment>
        )

    }

}


export default compose([

    withDispatch(( dispatch , props ) => {

        return {
            toggleModalOpen: function( ) {
                dispatch( 'silk/ui' ).toggleModalOpen()
            }
        }

    }),
    withSelect(( select , props ) => {
        
        return {
            modalOpenState: select( 'silk/ui' ).getModalOpemState()
        };

    }),

])( Sidebar );
