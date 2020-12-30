import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-address',
    label: 'sw-cms.blocks.text.textAddress.label',
    category: 'text',
    component: 'sw-cms-block-text-address',
    previewComponent: 'sw-cms-preview-text-address',
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
                                <p>Martin Huber Knives <br>
                                    Inh. Martin Huber <br>
                                    Gewerbepark 7 <br>
                                    4451 Garsten, Austria <br></p>
                        `.trim()
                    }
                }
            }
        },
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <p><span class="color-yellow">T:</span> <span>0043.664.123.45.67</span> </p>
                                <p><span class=color-yellow>M:</span> <span>order@martinhuberknives.at</span></p>
                        `.trim()
                    }
                }
            }
        }
    }
});
