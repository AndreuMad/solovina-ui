import { notify } from 'reapop';

export const globalNotificationOpts = {
  position: 'tr'
};

export const defaultSuccessNotificationOpts = {
  status : 'success',
  title  : 'Success!',
  message: 'Action successfully finished!'
};

export const defaultLoadingNotificationOpts = {
  title       : 'Upload status',
  status      : 'loading',
  message     : 'Please, wait',
  dismissible : false,
  dismissAfter: 0
};

export const defaultErrorNotificationOpts = {
  status : 'error',
  title  : '',
  message: 'Something went wrong!'
};

export const successNotification = payload => {
  return notify({
    ...globalNotificationOpts,
    ...defaultSuccessNotificationOpts,
    ...payload
  });
};

export const loadingNotification = payload => {
  return notify({
    ...globalNotificationOpts,
    ...defaultLoadingNotificationOpts,
    ...payload
  });
};

export const errorNotification = payload => {
  return notify({
    ...globalNotificationOpts,
    ...defaultErrorNotificationOpts,
    ...payload
  });
};
