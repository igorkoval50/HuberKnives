import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-two-button',
    label: 'sw-cms.blocks.text.textTwoButton.label',
    category: 'text',
    component: 'sw-cms-block-text-two-button',
    previewComponent: 'sw-cms-preview-text-two-button',
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
                              <p>Die Kurse richten sich an Teilnehmer mit einem <span>Mindestalter von 16 Jahren</span>. Gerne können auch Eltern mit Kindern unter 16 Jahren einen Workshop besuchen. In diesem Fall haften die Eltern für Ihre Kinder. Schutzausrüstung wird zur Verfügung gestellt. <span>Warme Arbeitskleidung und festes Schuhwerk mit Stahlkappen bringen Sie bitte selbst mit.</span></p>
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
                            <p><span>Alle Kurse sind auch als Gutscheine erhältlich</span> — das besondere Geschenk für den Mann und jeden Axt-, Messer- und Schmiedebegeisterten. Bei weiteren Fragen bitte melden unter per E-Mail an messer@martinhuberknives.at oder per Telefon unter 0043.660.766.19.66 (werktags von 08:00 bis 20:00 erreichbar).</p>
                        `.trim()
                    }
                }
            }
        },
        bottom: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                           <a href="#" class="btn btn-yellow">Zu den Gutscheinen</a>
                        `.trim()
                    }
                }
            }
        }
    }
});
