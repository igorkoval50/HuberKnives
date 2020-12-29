import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-headline',
    label: 'sw-cms.blocks.text.textHeadline.label',
    category: 'text',
    component: 'sw-cms-block-text-headline',
    previewComponent: 'sw-cms-preview-text-headline',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        center: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <p class="headline-uppercase">Ein Messer fürs Leben</p>
                                <h3>Entdecken Sie Ihren scharfen Wegbeleiter</h3>
                        `.trim()
                    }
                }
            }
        }
    }
});
