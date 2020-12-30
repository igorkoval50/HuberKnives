import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'form-two',
    label: 'sw-cms.blocks.form.formTwo.label',
    category: 'form',
    component: 'sw-cms-block-form-two',
    previewComponent: 'sw-cms-preview-form-two',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: 'form',
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <h3>So finden Sie uns:</h3>
                                <h4>Mit dem Auto:</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                                <h4>Mit der Bahn:</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                                <a href="#">Auf Google Maps ansehen <span style="color: #EB6807;"> > </span></a>
                        `.trim()
                    }
                }
            }
        },
        top: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p class="headline-uppercase"><span style="color:#EB6807">+</span> Kontakt</p>
                        `.trim()
                    }
                }
            }
        }
    }
});
