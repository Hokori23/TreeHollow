import Vue from 'vue';

const eventBus = new Vue();

export const getEventBus = () => eventBus;
