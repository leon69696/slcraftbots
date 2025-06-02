// Definicja komendy do tworzenia zgłoszeń
// Wymagane modele trzeba dodawać samodzielnie

new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Utwórz zgłoszenie do administracji')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

        } else if (interaction.commandName === 'ticket') {
            const panelEmbed = {
                color: 0xFF0000,
                title: 'Ticket Panel',
                description: 'Wybierz powód zgłoszenia z poniższego menu, aby utworzyć zgłoszenie do administracji.',
                image: {
                    url: 'https://i.imgur.com/ztJtMDV.png'
                },
                footer: {
                    text: 'ꜱʟᴄʀᴀꜰᴛ.ᴘʟ',
                    icon_url: 'https://i.imgur.com/ztJtMDV.png'
                }
            };
            const panelSelect = new StringSelectMenuBuilder()
                .setCustomId('ticket_type')
                .setPlaceholder('Wybierz powód zgłoszenia')
                .addOptions([
                    { label: 'Pomoc', value: 'pomoc', emoji: { id: 'Twoje ID' }, description: 'Potrzebujesz pomocy' },
                    { label: 'Współpraca', value: 'wspolpraca', emoji: { id: 'Twoje ID' }, description: 'Propozycja współpracy' },
                    { label: 'Sprawa', value: 'sprawa', emoji: { id: 'Twoje ID' }, description: 'Masz sprawę do zarządu' },
                    { label: 'Pomoc Bot', value: 'pomoc_bot', emoji: { id: 'Twoje ID' }, description: 'Potrzebujesz pomocy z botem' },
                    { label: 'Plugin/Skrypt', value: 'pomoc_plugin', emoji: { id: 'Twoje ID' }, description: 'Potrzebujesz pomocy z pluginem/skryptem' },
                    { label: 'Zgłoszenie gracza', value: 'zgloszenie', emoji: { id: 'Twoje ID' }, description: 'Chcesz zgłosić gracza/administratora' },
                    { label: 'Błąd serwera', value: 'blad_serwera', emoji: { id: 'Twoje ID' }, description: 'Chcesz zgłosić błąd serwera' },
                    { label: 'inne', value: 'inne', emoji: { id: 'twoje id' }, description: 'Żadna z powyższych' }
                ]);
            const row = new ActionRowBuilder().addComponents(panelSelect);
            await interaction.deferReply({ ephemeral: true });
            await interaction.channel.send({ embeds: [panelEmbed], components: [row] });
            await interaction.deleteReply();
            return;