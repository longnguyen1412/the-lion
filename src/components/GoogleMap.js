import React from 'react';

class GoogleMap extends React.Component {
    render() {
        return (
            <section className="GoogleMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5268.1148015115705!2d105.83518938632852!3d20.98783836795746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6809396357%3A0xeabc3de64ff8264a!2zMzYwIEdp4bqjaSBQaMOzbmcsIFBoxrDGoW5nIExp4buHdCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1594046049603!5m2!1svi!2s" width="100%" height="550" title="360 Giải Phóng" aria-hidden="false"></iframe>
            </section>
        )
    }
}

export default GoogleMap;