import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as platform from '@angular/platform-browser';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as bablePolyfill from '@babel/polyfill';

export const WIDGETS_EXTERNALS_MAP = {
    // Angular dependencies
    'ng.core': core,
    'ng.common': common,
    'ng.forms': forms,
    'ng.router': router,
    'ng.platform': platform,
    // External support dependencies
    rxjs,
    tslib,
    bablePolyfill
    // Include additional support dependencies here
};