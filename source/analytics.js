define('TWOverflow/Queue/analytics', [
    'TWOverflow/Queue'
], function (Queue) {
    Queue.analytics = function () {
        ga('create', '__queue_analytics', 'auto', '__queue_name')

        Queue.bind('start', function () {
            ga('__queue_name.send', 'event', 'behavior', 'start')
        })

        Queue.bind('stop', function () {
            ga('__queue_name.send', 'event', 'behavior', 'stop')
        })

        Queue.bind('error', function (error) {
            ga('__queue_name.send', 'event', 'commands', 'error', error)
        })

        Queue.bind('send', function (command) {
            ga('__queue_name.send', 'event', 'commands', 'send', command.type)
        })

        Queue.bind('add', function () {
            ga('__queue_name.send', 'event', 'behavior', 'add')
        })

        Queue.bind('expired', function () {
            ga('__queue_name.send', 'event', 'commands', 'expired')
        })

        Queue.bind('remove', function (removed, command, manualRemove) {
            if (removed && manualRemove) {
                ga('__queue_name.send', 'event', 'commands', 'remove')
            }
        })
    }
})
