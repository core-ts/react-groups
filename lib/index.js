import * as React from 'react';
import { Link } from 'react-router-dom';
export function Groups(props) {
  return (React.createElement('div', { className: props.className }, React.createElement('header', null, React.createElement('h2', null, props.title)), React.createElement('br', null), React.createElement('br', null), React.createElement(GroupItems, { groups: props.groups, resource: props.resource, className: props.groupClass, headerClass: props.headerClass, subClass: props.subClass })));
}
export function GroupItems(props) {
  return (React.createElement(React.Fragment, null, React.createElement('section', { className: props.className }, renderGroups(props.groups, props.resource, props.headerClass, props.subClass))));
}
export default GroupItems;
export var renderGroups = function (items, resource, headerClass, subClass) {
  return items.map(function (form, idx) {
    return renderGroup(form, idx, resource, headerClass, subClass);
  });
};
export var renderGroup = function (item, idx, resource, headerClass, subClass) {
  var name = item.name;
  if (resource && item.resource) {
    var text = resource[item.resource];
    name = !text || text.length === 0 ? item.name : text;
  }
  var className = getIconClass(item.icon);
  if (item.children && Array.isArray(item.children) && item.children.length > 0) {
    var subs = item.children;
    return (React.createElement('label', { className: headerClass, key: idx }, React.createElement('div', null, React.createElement('i', { className: 'material-icons group-header' }, className), React.createElement('span', { className: 'group-header' }, name)), React.createElement('ul', { className: 'group-ul' }, renderGroups(subs, resource, headerClass, subClass)), React.createElement('hr', null)));
  }
  else {
    return (React.createElement('label', { className: subClass, key: idx }, React.createElement(Link, { to: item.path }, React.createElement('div', null, React.createElement('i', { className: 'material-icons' }, className), React.createElement('span', null, name)))));
  }
};
export function getIconClass(icon) {
  return !icon || icon.length === 0 ? 'settings' : icon;
}
