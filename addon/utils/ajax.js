/* global najax */
import $ from 'jquery';
import isFastBoot from './is-fastboot';

export default isFastBoot ? najax : $.ajax;
