module.exports = (icon, className) =>
  `<i class="material-icons ${ className || '' }" aria-hidden="true" role="presentation">${ icon }</i>`;
