export const sortFields = [
    {
        label: 'Имя',
        value: 'name'
    },
    {
        label: 'Возраст',
        value: 'age'
    },
    {
        label: 'Рейтинг',
        value: 'rating'
    },
    {
        label: 'Цвет',
        value: 'color'
    }
];

export const colors = [
    { value: 'blue', controlLabel: 'Голубой', color: '#49C2E8' },
    { value: 'red', controlLabel: 'Красный', color: '#E25B5B' },
    { value: 'green', controlLabel: 'Зеленый', color: '#83C872' },
    { value: 'yellow', controlLabel: 'Желтый', color: '#F7FB53' },
    { value: 'black', controlLabel: 'Черный', color: '#000' },
    { value: 'orange', controlLabel: 'Оранжевый', color: '#EFA638' },
    {
        value: 'pride',
        controlLabel: 'Радужный',
        color: 'linear-gradient(180deg, #f00000, ' +
            '#f00000 16.67%, #ff8000 16.67%, ' +
            '#ff8000 33.33%, #ffff00 33.33%, ' +
            '#ffff00 50%, #007940 50%, ' +
            '#007940 66.67%, #4040ff 66.67%, ' +
            '#4040ff 83.33%, ' +
            '#a000c0 83.33%, ' +
            '#a000c0)'
    },
];

export const colorsOrder = colors.reduce((res, color, i) => {
    res[color.value] = i;
    return res;
}, {});

export const specs = [
    { value: 'pi', label: 'Прикладная информатика', shortLabel: 'ПИ' },
    { value: 'fiit', label: 'Фундаментальная информатика и ИТ', shortLabel: 'ФИИТ' },
    { value: 'kn', label: 'Математика и компьютерные науки', shortLabel: 'КН' },
    { value: 'kb', label: 'Компьютерная безопасность', shortLabel: 'КБ' },
];

export const groups = [
    { value: 'pi101', label: 'ПИ-101' },
    { value: 'fiit101', label: 'ФИИТ-101' },
    { value: 'kn101', label: 'КН-101' },
    { value: 'kb101', label: 'КБ-101' },
    { value: 'pi102', label: 'ПИ-102' },
    { value: 'fiit102', label: 'ФИИТ-102' },
    { value: 'kn102', label: 'КН-102' },
];

export const genders = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' },
];