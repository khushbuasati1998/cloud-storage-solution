import userImg from '../../assets/profileImg.jpeg';

// Dummy data for folder list
export const folderCardList = [
    {
        title: 'The next big thing', secondTitle: '12 f · 2.1 gb', images: [
            { imgName: userImg }, { imgName: userImg },
            { imgName: userImg }, { imgName: userImg },
            { imgName: '' }, { imgName: '' },
            { imgName: '' }, { imgName: '' },
            { imgName: '' }, { imgName: '' },
        ]
    },
    {
        title: 'Top Secret', secondTitle: '12 f · 2.1 gb', images: [
            { imgName: userImg }, { imgName: userImg },
            { imgName: userImg }, { imgName: userImg },
            { imgName: '' },
        ]
    },
    {
        title: 'Freebie project', secondTitle: '12 f · 2.1 gb', images: [
            { imgName: userImg }, { imgName: userImg },
            { imgName: userImg },
        ]
    },
    {
        title: 'London Meetup', secondTitle: '12 f · 2.1 gb', images: [
            { imgName: userImg }, { imgName: userImg },
            { imgName: userImg }, { imgName: userImg },
            { imgName: '' }, { imgName: '' },
        ]
    },
];

export const homeTabList = [
    { label: 'Files', value: 'Files' },
    { label: 'Folders', value: 'Folders' }
]