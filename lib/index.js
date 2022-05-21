"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../group.css");
function Groups(props) {
  return (React.createElement('div', { className: props.className }, React.createElement('header', null, React.createElement('h2', null, props.title)), React.createElement('br', null), React.createElement('br', null), React.createElement(GroupItems, { groups: props.groups, resource: props.resource, className: props.groupClass, headerClass: props.headerClass, subClass: props.subClass })));
}
exports.Groups = Groups;
function GroupItems(props) {
  return (React.createElement(React.Fragment, null, React.createElement('section', { className: props.className }, exports.renderGroups(props.groups, props.resource, props.headerClass, props.subClass))));
}
exports.GroupItems = GroupItems;
exports.default = GroupItems;
exports.renderGroups = function (items, resource, headerClass, subClass) {
  return items.map(function (form, idx) {
    return exports.renderGroup(form, idx, resource, headerClass, subClass);
  });
};
exports.renderGroup = function (item, idx, resource, headerClass, subClass) {
  var name = item.name;
  if (resource && item.resource) {
    var text = resource[item.resource];
    name = !text || text.length === 0 ? item.name : text;
  }
  var className = getIconClass(item.icon);
  if (item.children && Array.isArray(item.children) && item.children.length > 0) {
    var subs = item.children;
    return (React.createElement('label', { className: headerClass, key: idx }, React.createElement('div', null, React.createElement('i', { className: 'material-icons group-header' }, className), React.createElement('span', { className: 'group-header' }, name)), React.createElement('ul', { className: 'group-ul' }, exports.renderGroups(subs, resource, headerClass, subClass)), React.createElement('hr', null)));
  }
  else {
    return (React.createElement('label', { className: subClass, key: idx }, React.createElement(react_router_dom_1.Link, { to: item.path }, React.createElement('div', null, React.createElement('i', { className: 'material-icons' }, className), React.createElement('span', null, name)))));
  }
};
function getIconClass(icon) {
  return !icon || icon.length === 0 ? 'settings' : icon;
}
exports.getIconClass = getIconClass;
function buildShownItems(keyword, items) {
  if (!keyword || keyword === '') {
    return items;
  }
  var w = keyword.toLowerCase();
  var shownItems = items.map(function (parent) {
    var parentCopy = Object.assign({}, parent);
    if (parentCopy.children) {
      parentCopy.children = parentCopy.children.filter(function (child) { return child.name.toLowerCase().includes(w); });
    }
    return parentCopy;
  }).filter(function (item) { return (item.children && item.children.length > 0) || item.name.toLowerCase().includes(w); });
  return shownItems;
}
exports.buildShownItems = buildShownItems;
