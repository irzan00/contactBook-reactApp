import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';

function ContactItem({name, tag, imageUrl}) {
    return (
        <div className='contact-item'>
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
        </div>
    )
}

export default ContactItem;