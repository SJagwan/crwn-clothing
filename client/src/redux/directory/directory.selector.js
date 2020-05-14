import {createSelector} from 'reselect';

export const selectDirectory= state=>state.directory;

export const selectDirectorySelection =createSelector(
    [selectDirectory],
    (directory)=>directory.sections
)