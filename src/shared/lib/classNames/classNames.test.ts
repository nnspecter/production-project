import { classNames } from './classNames';

describe('ClassNames', () => {
    test('with one param', () => {
        expect(classNames('ClassName')).toBe('ClassName');
    });
    test('with mods param', () => {
        expect(classNames('ClassName', { mode: true, full: false })).toBe('ClassName mode');
    });
    test('with additional', () => {
        expect(classNames('ClassName', {}, ['add', 'pressable'])).toBe('ClassName add pressable');
    });
    test('with allParams', () => {
        expect(classNames(
            'ClassName',
            { mode: true, full: false, red: undefined },
            ['add', 'pressable'],
        )).toBe('ClassName add pressable mode');
    });
});
