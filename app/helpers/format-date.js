// app/helpers/format-date.js
import { helper } from '@ember/component/helper';

export default helper(function formatDate([date], { format = 'MM/DD/YYYY' } = {}) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
});
