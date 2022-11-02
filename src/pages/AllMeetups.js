import React from "react";
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: '',
        address: '97 Clough Road, Sheffield',
        description: 'This is a first, amazing meetup which you definitely should not miss!'        
    },

    {
        id: 'm2',
        title: 'This is a second meetup',
        image: '',
        address: '97 Clough Road, Sheffield',
        description: 'This is a first, amazing meetup which you definitely should not miss!' 
    }
];

function AllMeetupsPage () {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>;
                })}
            </ul>
            
        </section>
    );
}

export default AllMeetupsPage;