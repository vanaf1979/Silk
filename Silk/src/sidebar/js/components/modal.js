/**
 * External dependencies.
 */
import React from 'react'
import Modal from 'react-modal';

/**
 * Local dependencies.
 */
import icons from '../icons/icons.js'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { Icon } = wp.components;

/**
 * Attach the modal.
 */
Modal.setAppElement('#editor');

/**
 * Modal component.
 *
 * @since 1.0.0
 * @author Vanaf1979 - Stephan Nijman http://vanaf1979.nl
 */
class Modal extends React.Component {
    
    constructor() {

        super()

        this.state = {
            
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        
    }


    openModal() {

        this.props.toggleModalOpen()

    }

    
    closeModal() {
        
        this.props.toggleModalOpen()

    }


    afterOpenModal() {

    }


    render() {
        return (
            <Modal
                isOpen={this.props.modalOpenState}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                className="silk-modal"
                overlayClassName="silk-modal-overlay"
            >

                <header className="silk-modal-header">

                    <Icon className="icon" icon={icons.butterfly}/>

                    <h4>Silk seo</h4>

                    <a onClick={this.closeModal} className="fas fa-times"></a>

                </header>

                <main>

                    {this.props.children}

                </main>
                

            </Modal>
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

])( Modal );