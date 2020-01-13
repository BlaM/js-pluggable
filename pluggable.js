window.collection = (function (pluggable) {
    pluggable = pluggable || {};
    pluggable.plug = function(handle, object) {
        if (object && (!pluggable[handle] || pluggable[handle].version < object.version)) {
            pluggable[handle] = object;
        }
        return pluggable[handle];
    }
    return pluggable;
})(window.collection);
