const model = {
    selectedDate: '2020-05-13',
    actions: [
        { description: 'Vanne', isSelected: true },
        { description: 'Gjødsle' },
        { description: 'Vurdere beskjæring' },
        { description: 'Vurdere potte om' },
        { description: 'Alt' },
    ],
    selected: {
        day: 13,
        month: 5,
        year: 2020
    },
    flowers: [
        {
            name: 'Tulipaner',
            tasks: {
                watering: { frequencyDays: 14, lastDate: '2020-04-30' },
                fertilizing: { frequencyDays: 30, lastDate: '2020-04-30' },
            },
        },
        {
            name: 'Gladioler',
            tasks: {
                watering: { frequencyDays: 5, lastDate: '2020-05-10' },
                fertilizing: { frequencyDays: 30, lastDate: '2020-04-30' },
            },
        },
        {
            name: 'Peoner',
            tasks: {
                watering: { frequencyDays: 6, lastDate: '2020-05-08' },
                fertilizing: { frequencyDays: 30, lastDate: '2020-04-30' },
            },
        },
        {
            name: 'Roser',
            tasks: {
                watering: { frequencyDays: 3, lastDate: '2020-05-13' },
                fertilizing: { frequencyDays: 30, lastDate: '2020-04-30' },
            },
        },
    ],
};