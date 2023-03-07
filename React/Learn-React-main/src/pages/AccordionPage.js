import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {
    const items = [
        {
            id: 'gdawq1',
            label: 'can i use react on a project1',
            content: '1. you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want'
        },
        {
            id: 'gdawq2',
            label: 'can i use javascript on a project2',
            content: '2. you can use react on any project you want  you can use react on any project you want you can use react on any project you want you can use react on any project you want'
        },
        {
            id: 'gdawq3',
            label: 'can i  use css on a project3',
            content: '3. you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want'
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage