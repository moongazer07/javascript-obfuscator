import { MakeEnum } from '../../../utils/TsEnum';

export const StringArrayWrappersType: Readonly<{
    Variable: 'variable';
    Function: 'function';
}> = MakeEnum({
    Variable: 'variable',
    Function: 'function',
});
