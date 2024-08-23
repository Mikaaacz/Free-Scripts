


exports('sendNotify', function(data) SendNUIMessage({action = 'Notify', desc = data}) end)

RegisterCommand('testNotify', function()
    exports['mk_notify']:sendNotify('Testowe powiadomienie')
end)