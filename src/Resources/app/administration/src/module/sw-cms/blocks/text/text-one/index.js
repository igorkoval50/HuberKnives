import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-one',
    label: 'sw-cms.blocks.text.textOne.label',
    category: 'text',
    component: 'sw-cms-block-text-one',
    previewComponent: 'sw-cms-preview-text-one',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <p class="headline-uppercase"><span style="color:#EB6807">+</span> Hier fehlt eine Subheadline</p>
                                <h3>Handarbeit</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        `.trim()
                    }
                }
            }
        }
    }
});
