import { LitElement, html, css } from "https://unpkg.com/lit?module";

// Unified i18n (admin + child keys)
const C4K_I18N = {
	en: {
		// Shared/admin
		'overview.title': 'Recent tasks',
		'overview.show_all': 'Show all ({pending} pending)',
		'overview.none': 'No tasks yet.',
		'card.admin_title': 'Chores4Kids – Admin',
		'input.new_child_name': 'New child — name',
		'btn.add_child': 'Add child',
		'section.children': 'Children',
		'th.name': 'Name', 'th.points': 'Points', 'th.pending': 'Pending', 'th.actions': 'Actions', 'th.status':'Status', 'th.assign':'Assign',
		'btn.rename': 'Rename', 'btn.delete': 'Delete',
		'section.new_task': 'New task',
		'ph.title': 'Title', 'ph.points': 'Points', 'ph.description': 'Description (optional)',
		'select.assign_child': 'Assign child',
		'ph.icon': 'Icon (mdi:...)',
		'icon.choose': 'Choose icon', 'icon.clear': 'Clear icon', 'icon.none': 'None', 'icon.search': 'Search icon',
		'btn.create_task': 'Create task', 'btn.update_task': 'Update task', 'btn.edit': 'Edit', 'editor.loaded_task': 'Editing existing task',
		'section.unassigned': 'Unassigned tasks', 'btn.assign': 'Assign',
		'section.tasks_per_child': 'Tasks per child',
		'btn.start': 'Start', 'btn.back': 'Reassign', 'btn.awaiting': 'Awaiting', 'btn.approve': 'Approve', 'lbl.approved': 'Approved',
		'section.scoreboard': 'Scoreboard',
		'confirm.delete_child': 'Delete {name}?', 'confirm.delete_task': 'Delete task?',
		'alert.choose_child_first': 'Choose a child first',
		'ui.auto_recycle': 'Auto recycle approved tasks',
		'ui.toggle_off_on': 'Off/On',
		'section.tasks': 'Tasks',
		'form.save': 'Save', 'form.add':'Add', 'form.cancel':'Cancel',
		'repeat.label': 'Repeat', 'repeat.auto_assign': 'Auto-assign (repeat)', 'repeat.save': 'Save plan',
		'repeat.days.mon':'Mon','repeat.days.tue':'Tue','repeat.days.wed':'Wed','repeat.days.thu':'Thu','repeat.days.fri':'Fri','repeat.days.sat':'Sat','repeat.days.sun':'Sun',
		'assign.disabled_auto': 'Disabled: auto-assign (repeat) is active',
		'btn.add_points': 'Add points', 'btn.reset_points': 'Reset points',
		'points.title': 'Add points to {name}', 'points.quick':'Quick add', 'points.remove':'Quick remove', 'points.custom':'Custom amount',
		'err.title_required':'Title is required','err.points_required':'Points are required','err.points_number':'Points must be a number','err.points_positive':'Points must be 0 or more',
		'status.assigned':'Assigned','status.in_progress':'In progress','status.awaiting_approval':'Awaiting approval','status.approved':'Approved','status.rejected':'Rejected','status.unassigned':'Unassigned',
		// Shop
		'shop.title':'Point shop','shop.open':'Open shop','shop.item':'Item','shop.price':'Price','shop.icon':'Icon','shop.image':'Image','shop.upload':'Upload image','shop.add_item':'Add item','shop.history':'Purchase history','shop.child':'Child','shop.when':'When','shop.date':'Date','shop.time':'Time','shop.advanced':'Advanced actions','shop.entity':'Entity','shop.operation':'Operation','shop.add_action':'Add action','shop.add_delay':'Add delay','shop.steps':'Steps','shop.seconds':'Seconds','shop.minutes':'Minutes','shop.hours':'Hours','shop.delay':'Delay','shop.active':'Active','shop.buy':'Buy','shop.clear_history':'Clear history','confirm.clear_history':'Clear all purchase history?',
		// Child specific
		'card.child_title_fallback': 'Chores4Kids – {name}',
		'msg.child_not_found': 'Child not found. Check the name in card configuration.',
		'msg.no_tasks': 'No tasks right now.',
			'btn.done': 'Done', 'btn.start_task': 'Start task', 'btn.complete_task': 'Complete task',
			'lbl.awaiting':'Awaiting approval',
			'lbl.points': 'points',
			// Editor UI
			'editor.mode':'Mode', 'editor.mode_admin':'Admin', 'editor.mode_kid':'Kid',
			'editor.child_label':'Child', 'editor.child_placeholder':'Child name', 'editor.child_select_prompt':'— Select child —', 'editor.child_hint':'No children found yet — type the name manually.'
	},
	da: {
		'overview.title': 'Seneste opgaver',
		'overview.show_all': 'Vis alle ({pending} afventer)',
		'overview.none': 'Ingen opgaver endnu.',
		'card.admin_title': 'Chores4Kids – Admin',
		'input.new_child_name': 'Nyt barn – navn',
		'btn.add_child': 'Tilføj barn',
		'section.children': 'Børn',
		'th.name': 'Navn', 'th.points': 'Point', 'th.pending': 'Ventende', 'th.actions': 'Handling', 'th.status':'Status', 'th.assign':'Tildel',
		'btn.rename': 'Omdøb', 'btn.delete': 'Slet',
		'section.new_task': 'Ny opgave',
		'ph.title': 'Titel', 'ph.points': 'Point', 'ph.description': 'Beskrivelse (valgfri)',
		'select.assign_child': 'Tildel barn',
		'ph.icon': 'Ikon (mdi:...)',
		'icon.choose': 'Vælg ikon', 'icon.clear': 'Fjern ikon', 'icon.none': 'Ingen', 'icon.search': 'Søg ikon',
		'btn.create_task': 'Opret opgave', 'btn.update_task': 'Opdatér opgave', 'btn.edit': 'Redigér', 'editor.loaded_task': 'Redigerer eksisterende opgave',
		'section.unassigned': 'Utildelte opgaver', 'btn.assign': 'Tildel',
		'section.tasks_per_child': 'Opgaver pr. barn',
		'btn.start': 'Start', 'btn.back': 'Gentildel', 'btn.awaiting': 'Afventer', 'btn.approve': 'Godkend', 'lbl.approved': 'Godkendt',
		'section.scoreboard': 'Scoreboard',
		'confirm.delete_child': 'Slet {name}?', 'confirm.delete_task': 'Slet opgave?',
		'alert.choose_child_first': 'Vælg et barn først',
		'ui.auto_recycle': 'Genopret automatisk efter godkendelse',
		'ui.toggle_off_on': 'Fra/Til',
		'section.tasks': 'Opgaver',
		'form.save': 'Gem', 'form.add':'Tilføj', 'form.cancel':'Annullér',
		'repeat.label': 'Gentagelse', 'repeat.auto_assign': 'Auto-tildel (gentagelse)', 'repeat.save': 'Gem plan',
		'repeat.days.mon':'Man','repeat.days.tue':'Tir','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lør','repeat.days.sun':'Søn',
		'assign.disabled_auto': 'Deaktiveret: auto-tildeling (gentagelse) er aktiv',
		'btn.add_points': 'Tilføj point', 'btn.reset_points': 'Nulstil point',
		'points.title': 'Tilføj point til {name}', 'points.quick':'Hurtig tilføj', 'points.remove':'Hurtig fratræk', 'points.custom':'Valgfrit antal',
		'err.title_required':'Titel er påkrævet','err.points_required':'Point skal udfyldes','err.points_number':'Point skal være et tal','err.points_positive':'Point skal være 0 eller mere',
		'status.assigned':'Tildelt','status.in_progress':'I gang','status.awaiting_approval':'Afventer godkendelse','status.approved':'Godkendt','status.rejected':'Afvist','status.unassigned':'Ikke tildelt',
		'shop.title':'Pointshop','shop.open':'Åbn shop','shop.item':'Vare','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Billede','shop.upload':'Upload billede','shop.add_item':'Tilføj vare','shop.history':'Købshistorik','shop.child':'Barn','shop.when':'Tidspunkt','shop.date':'Dato','shop.time':'Tidspunkt','shop.advanced':'Avancerede handlinger','shop.entity':'Enhed','shop.operation':'Handling','shop.add_action':'Tilføj handling','shop.add_delay':'Tilføj delay','shop.steps':'Trin','shop.seconds':'Sekunder','shop.minutes':'Minutter','shop.hours':'Timer','shop.delay':'Forsinkelse','shop.active':'Aktiv','shop.buy':'Køb','shop.clear_history':'Ryd historik','confirm.clear_history':'Ryd hele købshistorikken?',
			'card.child_title_fallback': 'Chores4Kids – {name}', 'msg.child_not_found': 'Barn ikke fundet. Tjek navn i kort-konfigurationen.', 'msg.no_tasks':'Ingen opgaver lige nu.', 'btn.done':'Fuldført', 'btn.start_task':'Start opgave', 'btn.complete_task':'Opgave klaret', 'lbl.awaiting':'Afventer godkendelse', 'lbl.points': 'point'
			,
			// Editor UI
			'editor.mode':'Tilstand','editor.mode_admin':'Admin','editor.mode_kid':'Barn',
			'editor.child_label':'Barn','editor.child_placeholder':'Navn på barn','editor.child_select_prompt':'— Vælg barn —','editor.child_hint':'Ingen børn fundet endnu – skriv navnet manuelt.'
		},
		sv: {
			'overview.title': 'Senaste uppgifter', 'overview.show_all': 'Visa alla ({pending} väntar)', 'overview.none': 'Inga uppgifter ännu.',
			'card.admin_title': 'Chores4Kids – Admin', 'input.new_child_name': 'Nytt barn — namn', 'btn.add_child': 'Lägg till barn',
			'section.children': 'Barn', 'th.name':'Namn','th.points':'Poäng','th.pending':'Väntar','th.actions':'Åtgärder','th.status':'Status','th.assign':'Tilldela',
			'btn.rename':'Byt namn','btn.delete':'Ta bort', 'section.new_task':'Ny uppgift', 'ph.title':'Titel','ph.points':'Poäng','ph.description':'Beskrivning (valfritt)',
			'select.assign_child':'Tilldela barn', 'ph.icon':'Ikon (mdi:...)', 'icon.choose':'Välj ikon','icon.clear':'Rensa ikon','icon.none':'Ingen','icon.search':'Sök ikon',
			'btn.create_task':'Skapa uppgift','btn.update_task':'Uppdatera uppgift','btn.edit':'Redigera','editor.loaded_task':'Redigerar befintlig uppgift',
			'section.unassigned':'Otilldelade uppgifter','btn.assign':'Tilldela','section.tasks_per_child':'Uppgifter per barn',
			'btn.start':'Starta','btn.back':'Tilldela igen','btn.awaiting':'Väntar','btn.approve':'Godkänn','lbl.approved':'Godkänd',
			'section.scoreboard':'Poängtavla', 'confirm.delete_child':'Ta bort {name}?','confirm.delete_task':'Ta bort uppgift?', 'alert.choose_child_first':'Välj ett barn först',
			'ui.toggle_off_on':'Av/På',
			'section.tasks':'Uppgifter', 'form.save':'Spara','form.add':'Lägg till','form.cancel':'Avbryt',
			'repeat.label':'Upprepa','repeat.auto_assign':'Auto-tilldela (upprepa)','repeat.save':'Spara plan',
			'repeat.days.mon':'Mån','repeat.days.tue':'Tis','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lör','repeat.days.sun':'Sön',
			'assign.disabled_auto':'Inaktiverad: auto-tilldelning (upprepning) är aktiv',
			'btn.add_points':'Lägg till poäng','btn.reset_points':'Återställ poäng', 'points.title':'Lägg till poäng till {name}','points.quick':'Snabbtillägg','points.remove':'Snabb borttagning','points.custom':'Anpassat antal',
			'err.title_required':'Titel krävs','err.points_required':'Poäng krävs','err.points_number':'Poäng måste vara ett tal','err.points_positive':'Poängen måste vara 0 eller mer',
			'status.assigned':'Tilldelad','status.in_progress':'Pågår','status.awaiting_approval':'Väntar på godkännande','status.approved':'Godkänd','status.rejected':'Avvisad','status.unassigned':'Ej tilldelad',
			'shop.title':'Shop','shop.open':'Öppna shop','shop.item':'Vara','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Bild','shop.upload':'Ladda upp bild','shop.add_item':'Lägg till vara','shop.history':'Köphistorik','shop.child':'Barn','shop.when':'Tidpunkt','shop.date':'Datum','shop.time':'Tid','shop.active':'Aktiv','shop.buy':'Köp',
			'shop.advanced':'Avancerade åtgärder','shop.entity':'Enhet','shop.operation':'Åtgärd','shop.add_action':'Lägg till åtgärd','shop.add_delay':'Lägg till fördröjning','shop.steps':'Steg','shop.seconds':'Sekunder','shop.minutes':'Minuter','shop.hours':'Timmar','shop.delay':'Fördröjning',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Barn hittades inte. Kontrollera namnet i kortets konfiguration.','msg.no_tasks':'Inga uppgifter just nu.', 'btn.done':'Klar','btn.start_task':'Starta uppgift','btn.complete_task':'Uppgift klar','lbl.awaiting':'Väntar på godkännande','lbl.points':'poäng',
			// Editor UI
			'editor.mode':'Läge','editor.mode_admin':'Admin','editor.mode_kid':'Barn',
			'editor.child_label':'Barn','editor.child_placeholder':'Barnets namn','editor.child_select_prompt':'— Välj barn —','editor.child_hint':'Inga barn hittades ännu – skriv namnet manuellt.'
		},
		nb: {
			'overview.title':'Siste oppgaver','overview.show_all':'Vis alle ({pending} venter)','overview.none':'Ingen oppgaver ennå.',
			'card.admin_title':'Chores4Kids – Admin','input.new_child_name':'Nytt barn — navn','btn.add_child':'Legg til barn',
			'section.children':'Barn','th.name':'Navn','th.points':'Poeng','th.pending':'Ventende','th.actions':'Handlinger','th.status':'Status','th.assign':'Tildel',
			'btn.rename':'Gi nytt navn','btn.delete':'Slett','section.new_task':'Ny oppgave','ph.title':'Tittel','ph.points':'Poeng','ph.description':'Beskrivelse (valgfritt)',
			'select.assign_child':'Tildel barn', 'ph.icon':'Ikon (mdi:...)','icon.choose':'Velg ikon','icon.clear':'Fjern ikon','icon.none':'Ingen','icon.search':'Søk ikon',
			'btn.create_task':'Opprett oppgave','btn.update_task':'Oppdater oppgave','btn.edit':'Rediger','editor.loaded_task':'Redigerer eksisterende oppgave',
			'section.unassigned':'Ikke tildelte oppgaver','btn.assign':'Tildel','section.tasks_per_child':'Oppgaver per barn',
			'btn.start':'Start','btn.back':'Tildel på nytt','btn.awaiting':'Avventer','btn.approve':'Godkjenn','lbl.approved':'Godkjent',
			'section.scoreboard':'Poengtavle','confirm.delete_child':'Slette {name}?','confirm.delete_task':'Slette oppgave?','alert.choose_child_first':'Velg et barn først',
			'ui.toggle_off_on':'Av/På',
			'section.tasks':'Oppgaver','form.save':'Lagre','form.add':'Legg til','form.cancel':'Avbryt',
			'repeat.label':'Gjentakelse','repeat.auto_assign':'Auto-tildel (gjentakelse)','repeat.save':'Lagre plan',
			'repeat.days.mon':'Man','repeat.days.tue':'Tir','repeat.days.wed':'Ons','repeat.days.thu':'Tor','repeat.days.fri':'Fre','repeat.days.sat':'Lør','repeat.days.sun':'Søn',
			'assign.disabled_auto':'Deaktivert: auto-tildeling (gjentakelse) er aktiv',
			'btn.add_points':'Legg til poeng','btn.reset_points':'Nullstill poeng', 'points.title':'Legg til poeng til {name}','points.quick':'Hurtig legg til','points.remove':'Hurtig trekk fra','points.custom':'Valgfritt antall',
			'err.title_required':'Tittel er påkrevd','err.points_required':'Poeng må fylles ut','err.points_number':'Poeng må være et tall','err.points_positive':'Poeng må være 0 eller mer',
			'status.assigned':'Tildelt','status.in_progress':'Pågår','status.awaiting_approval':'Avventer godkjenning','status.approved':'Godkjent','status.rejected':'Avvist','status.unassigned':'Ikke tildelt',
			'shop.title':'Butikk','shop.open':'Åpne butikk','shop.item':'Vare','shop.price':'Pris','shop.icon':'Ikon','shop.image':'Bilde','shop.upload':'Last opp bilde','shop.add_item':'Legg til vare','shop.history':'Kjøpshistorikk','shop.child':'Barn','shop.when':'Tidspunkt','shop.date':'Dato','shop.time':'Tidspunkt','shop.active':'Aktiv','shop.buy':'Kjøp',
			'shop.advanced':'Avanserte handlinger','shop.entity':'Enhet','shop.operation':'Handling','shop.add_action':'Legg til handling','shop.add_delay':'Legg til forsinkelse','shop.steps':'Steg','shop.seconds':'Sekunder','shop.minutes':'Minutter','shop.hours':'Timer','shop.delay':'Forsinkelse',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Barn ikke funnet. Sjekk navnet i kortkonfigurasjonen.','msg.no_tasks':'Ingen oppgaver nå.', 'btn.done':'Ferdig','btn.start_task':'Start oppgave','btn.complete_task':'Oppgave klar','lbl.awaiting':'Venter på godkjenning','lbl.points':'poeng',
			// Editor UI
			'editor.mode':'Modus','editor.mode_admin':'Admin','editor.mode_kid':'Barn',
			'editor.child_label':'Barn','editor.child_placeholder':'Barnets navn','editor.child_select_prompt':'— Velg barn —','editor.child_hint':'Ingen barn funnet ennå – skriv inn navnet manuelt.'
		},
		de: {
			'overview.title':'Aktuelle Aufgaben','overview.show_all':'Alle anzeigen ({pending} ausstehend)','overview.none':'Noch keine Aufgaben.',
			'card.admin_title':'Chores4Kids – Admin','input.new_child_name':'Neues Kind — Name','btn.add_child':'Kind hinzufügen',
			'section.children':'Kinder', 'th.name':'Name','th.points':'Punkte','th.pending':'Ausstehend','th.actions':'Aktionen','th.status':'Status','th.assign':'Zuweisen',
			'btn.rename':'Umbenennen','btn.delete':'Löschen','section.new_task':'Neue Aufgabe','ph.title':'Titel','ph.points':'Punkte','ph.description':'Beschreibung (optional)',
			'select.assign_child':'Kind zuweisen','ph.icon':'Symbol (mdi:...)','icon.choose':'Symbol wählen','icon.clear':'Symbol entfernen','icon.none':'Keins','icon.search':'Symbol suchen',
			'btn.create_task':'Aufgabe erstellen','btn.update_task':'Aufgabe aktualisieren','btn.edit':'Bearbeiten','editor.loaded_task':'Vorhandene Aufgabe bearbeiten',
			'section.unassigned':'Nicht zugewiesene Aufgaben','btn.assign':'Zuweisen','section.tasks_per_child':'Aufgaben pro Kind',
			'btn.start':'Starten','btn.back':'Neu zuweisen','btn.awaiting':'Wartet','btn.approve':'Genehmigen','lbl.approved':'Genehmigt',
			'section.scoreboard':'Bestenliste','confirm.delete_child':'{name} löschen?','confirm.delete_task':'Aufgabe löschen?','alert.choose_child_first':'Bitte zuerst ein Kind wählen',
			'ui.toggle_off_on':'Aus/An',
			'section.tasks':'Aufgaben','form.save':'Speichern','form.add':'Hinzufügen','form.cancel':'Abbrechen',
			'repeat.label':'Wiederholen','repeat.auto_assign':'Automatisch zuweisen (Wiederholung)','repeat.save':'Plan speichern',
			'repeat.days.mon':'Mo','repeat.days.tue':'Di','repeat.days.wed':'Mi','repeat.days.thu':'Do','repeat.days.fri':'Fr','repeat.days.sat':'Sa','repeat.days.sun':'So',
			'assign.disabled_auto':'Deaktiviert: automatische Zuweisung (Wiederholung) aktiv',
			'btn.add_points':'Punkte hinzufügen','btn.reset_points':'Punkte zurücksetzen','points.title':'Punkte hinzufügen für {name}','points.quick':'Schnell hinzufügen','points.remove':'Schnell abziehen','points.custom':'Eigene Anzahl',
			'err.title_required':'Titel ist erforderlich','err.points_required':'Punkte sind erforderlich','err.points_number':'Punkte müssen eine Zahl sein','err.points_positive':'Punkte müssen 0 oder mehr sein',
			'status.assigned':'Zugewiesen','status.in_progress':'In Arbeit','status.awaiting_approval':'Wartet auf Genehmigung','status.approved':'Genehmigt','status.rejected':'Abgelehnt','status.unassigned':'Nicht zugewiesen',
			'shop.title':'Shop','shop.open':'Shop öffnen','shop.item':'Artikel','shop.price':'Preis','shop.icon':'Symbol','shop.image':'Bild','shop.upload':'Bild hochladen','shop.add_item':'Artikel hinzufügen','shop.history':'Kaufhistorie','shop.child':'Kind','shop.when':'Zeitpunkt','shop.date':'Datum','shop.time':'Uhrzeit','shop.active':'Aktiv','shop.buy':'Kaufen',
			'shop.advanced':'Erweiterte Aktionen','shop.entity':'Entität','shop.operation':'Aktion','shop.add_action':'Aktion hinzufügen','shop.add_delay':'Verzögerung hinzufügen','shop.steps':'Schritte','shop.seconds':'Sekunden','shop.minutes':'Minuten','shop.hours':'Stunden','shop.delay':'Verzögerung',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Kind nicht gefunden. Prüfe den Namen in der Kartenkonfiguration.','msg.no_tasks':'Keine Aufgaben gerade.', 'btn.done':'Fertig','btn.start_task':'Aufgabe starten','btn.complete_task':'Aufgabe erledigt','lbl.awaiting':'Wartet auf Genehmigung','lbl.points':'Punkte',
			// Editor UI
			'editor.mode':'Modus','editor.mode_admin':'Admin','editor.mode_kid':'Kind',
			'editor.child_label':'Kind','editor.child_placeholder':'Name des Kindes','editor.child_select_prompt':'— Kind auswählen —','editor.child_hint':'Noch keine Kinder gefunden – Namen manuell eingeben.'
		},
		es: {
			'overview.title':'Tareas recientes','overview.show_all':'Ver todas ({pending} pendientes)','overview.none':'Aún no hay tareas.',
			'card.admin_title':'Chores4Kids – Admin','input.new_child_name':'Nuevo niño — nombre','btn.add_child':'Añadir niño',
			'section.children':'Niños','th.name':'Nombre','th.points':'Puntos','th.pending':'Pendiente','th.actions':'Acciones','th.status':'Estado','th.assign':'Asignar',
			'btn.rename':'Renombrar','btn.delete':'Eliminar','section.new_task':'Nueva tarea','ph.title':'Título','ph.points':'Puntos','ph.description':'Descripción (opcional)',
			'select.assign_child':'Asignar niño', 'ph.icon':'Icono (mdi:...)','icon.choose':'Elegir icono','icon.clear':'Quitar icono','icon.none':'Ninguno','icon.search':'Buscar icono',
			'btn.create_task':'Crear tarea','btn.update_task':'Actualizar tarea','btn.edit':'Editar','editor.loaded_task':'Editando tarea existente',
			'section.unassigned':'Tareas sin asignar','btn.assign':'Asignar','section.tasks_per_child':'Tareas por niño',
			'btn.start':'Iniciar','btn.back':'Reasignar','btn.awaiting':'En espera','btn.approve':'Aprobar','lbl.approved':'Aprobada',
			'section.scoreboard':'Marcador','confirm.delete_child':'¿Eliminar a {name}?','confirm.delete_task':'¿Eliminar tarea?','alert.choose_child_first':'Elige un niño primero',
			'ui.toggle_off_on':'Apagado/Encendido',
			'section.tasks':'Tareas','form.save':'Guardar','form.add':'Añadir','form.cancel':'Cancelar',
			'repeat.label':'Repetir','repeat.auto_assign':'Auto-asignar (repetir)','repeat.save':'Guardar plan',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mié','repeat.days.thu':'Jue','repeat.days.fri':'Vie','repeat.days.sat':'Sáb','repeat.days.sun':'Dom',
			'assign.disabled_auto':'Deshabilitado: auto-asignación (repetición) activa',
			'btn.add_points':'Añadir puntos','btn.reset_points':'Reiniciar puntos','points.title':'Añadir puntos a {name}','points.quick':'Añadir rápido','points.remove':'Quitar rápido','points.custom':'Cantidad personalizada',
			'err.title_required':'El título es obligatorio','err.points_required':'Los puntos son obligatorios','err.points_number':'Los puntos deben ser un número','err.points_positive':'Los puntos deben ser 0 o más',
			'status.assigned':'Asignada','status.in_progress':'En curso','status.awaiting_approval':'En espera de aprobación','status.approved':'Aprobada','status.rejected':'Rechazada','status.unassigned':'Sin asignar',
			'shop.title':'Tienda','shop.open':'Abrir tienda','shop.item':'Artículo','shop.price':'Precio','shop.icon':'Icono','shop.image':'Imagen','shop.upload':'Subir imagen','shop.add_item':'Añadir artículo','shop.history':'Historial de compras','shop.child':'Niño','shop.when':'Fecha y hora','shop.date':'Fecha','shop.time':'Hora','shop.active':'Activo','shop.buy':'Comprar',
			'shop.advanced':'Acciones avanzadas','shop.entity':'Entidad','shop.operation':'Operación','shop.add_action':'Añadir acción','shop.add_delay':'Añadir retraso','shop.steps':'Pasos','shop.seconds':'Segundos','shop.minutes':'Minutos','shop.hours':'Horas','shop.delay':'Retraso',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Niño no encontrado. Revisa el nombre en la configuración de la tarjeta.','msg.no_tasks':'No hay tareas por ahora.', 'btn.done':'Hecho','btn.start_task':'Iniciar tarea','btn.complete_task':'Tarea hecha','lbl.awaiting':'En espera de aprobación','lbl.points':'puntos',
			// Editor UI
			'editor.mode':'Modo','editor.mode_admin':'Admin','editor.mode_kid':'Niño',
			'editor.child_label':'Niño','editor.child_placeholder':'Nombre del niño','editor.child_select_prompt':'— Seleccionar niño —','editor.child_hint':'Aún no se encontraron niños — escribe el nombre manualmente.'
		},
		fr: {
			'overview.title':'Tâches récentes','overview.show_all':'Tout afficher ({pending} en attente)','overview.none':'Aucune tâche pour le moment.',
			'card.admin_title':'Chores4Kids – Admin','input.new_child_name':'Nouvel enfant — nom','btn.add_child':'Ajouter un enfant',
			'section.children':'Enfants','th.name':'Nom','th.points':'Points','th.pending':'En attente','th.actions':'Actions','th.status':'Statut','th.assign':'Attribuer',
			'btn.rename':'Renommer','btn.delete':'Supprimer','section.new_task':'Nouvelle tâche','ph.title':'Titre','ph.points':'Points','ph.description':'Description (facultatif)',
			'select.assign_child':'Attribuer un enfant','ph.icon':'Icône (mdi:...)','icon.choose':'Choisir une icône','icon.clear':'Effacer l’icône','icon.none':'Aucune','icon.search':'Rechercher une icône',
			'btn.create_task':'Créer la tâche','btn.update_task':'Mettre à jour la tâche','btn.edit':'Modifier','editor.loaded_task':'Modification d’une tâche existante',
			'section.unassigned':'Tâches non attribuées','btn.assign':'Attribuer','section.tasks_per_child':'Tâches par enfant',
			'btn.start':'Démarrer','btn.back':'Réattribuer','btn.awaiting':'En attente','btn.approve':'Approuver','lbl.approved':'Approuvée',
			'section.scoreboard':'Classement','confirm.delete_child':'Supprimer {name} ?','confirm.delete_task':'Supprimer la tâche ?','alert.choose_child_first':'Veuillez d’abord choisir un enfant',
			'ui.toggle_off_on':'Arrêt/Marche',
			'section.tasks':'Tâches','form.save':'Enregistrer','form.add':'Ajouter','form.cancel':'Annuler',
			'repeat.label':'Répéter','repeat.auto_assign':'Auto-attribuer (répéter)','repeat.save':'Enregistrer le plan',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mer','repeat.days.thu':'Jeu','repeat.days.fri':'Ven','repeat.days.sat':'Sam','repeat.days.sun':'Dim',
			'assign.disabled_auto':'Désactivé : auto-attribution (répétition) active',
			'btn.add_points':'Ajouter des points','btn.reset_points':'Réinitialiser les points','points.title':'Ajouter des points à {name}','points.quick':'Ajout rapide','points.remove':'Retrait rapide','points.custom':'Montant personnalisé',
			'err.title_required':'Le titre est requis','err.points_required':'Les points sont requis','err.points_number':'Les points doivent être un nombre','err.points_positive':'Les points doivent être 0 ou plus',
			'status.assigned':'Attribuée','status.in_progress':'En cours','status.awaiting_approval':'En attente d’approbation','status.approved':'Approuvée','status.rejected':'Rejetée','status.unassigned':'Non attribuée',
			'shop.title':'Boutique','shop.open':'Ouvrir la boutique','shop.item':'Article','shop.price':'Prix','shop.icon':'Icône','shop.image':'Image','shop.upload':'Téléverser une image','shop.add_item':'Ajouter un article','shop.history':'Historique des achats','shop.child':'Enfant','shop.when':'Date et heure','shop.date':'Date','shop.time':'Heure','shop.active':'Actif','shop.buy':'Acheter',
			'shop.advanced':'Actions avancées','shop.entity':'Entité','shop.operation':'Opération','shop.add_action':'Ajouter une action','shop.add_delay':'Ajouter un délai','shop.steps':'Étapes','shop.seconds':'Secondes','shop.minutes':'Minutes','shop.hours':'Heures','shop.delay':'Délai',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Enfant introuvable. Vérifiez le nom dans la configuration de la carte.','msg.no_tasks':'Aucune tâche pour le moment.', 'btn.done':'Terminé','btn.start_task':'Démarrer la tâche','btn.complete_task':'Tâche terminée','lbl.awaiting':'En attente d’approbation','lbl.points':'points',
			// Editor UI
			'editor.mode':'Mode','editor.mode_admin':'Admin','editor.mode_kid':'Enfant',
			'editor.child_label':'Enfant','editor.child_placeholder':'Nom de l’enfant','editor.child_select_prompt':'— Sélectionner un enfant —','editor.child_hint':'Aucun enfant trouvé pour l’instant — saisissez le nom manuellement.'
		},
		fi: {
			'overview.title':'Viimeisimmät tehtävät','overview.show_all':'Näytä kaikki ({pending} odottaa)','overview.none':'Ei vielä tehtäviä.',
			'card.admin_title':'Chores4Kids – Ylläpito','input.new_child_name':'Uusi lapsi — nimi','btn.add_child':'Lisää lapsi',
			'section.children':'Lapset','th.name':'Nimi','th.points':'Pisteet','th.pending':'Odottaa','th.actions':'Toiminnot','th.status':'Tila','th.assign':'Määritä',
			'btn.rename':'Nimeä uudelleen','btn.delete':'Poista','section.new_task':'Uusi tehtävä','ph.title':'Otsikko','ph.points':'Pisteet','ph.description':'Kuvaus (valinnainen)',
			'select.assign_child':'Määritä lapsi','ph.icon':'Kuvake (mdi:...)','icon.choose':'Valitse kuvake','icon.clear':'Poista kuvake','icon.none':'Ei mitään','icon.search':'Hae kuvaketta',
			'btn.create_task':'Luo tehtävä','btn.update_task':'Päivitä tehtävä','btn.edit':'Muokkaa','editor.loaded_task':'Muokataan olemassa olevaa tehtävää',
			'section.unassigned':'Määrittämättömät tehtävät','btn.assign':'Määritä','section.tasks_per_child':'Tehtävät per lapsi',
			'btn.start':'Aloita','btn.back':'Määritä uudelleen','btn.awaiting':'Odottaa','btn.approve':'Hyväksy','lbl.approved':'Hyväksytty',
			'section.scoreboard':'Pistetaulukko','confirm.delete_child':'Poistetaanko {name}?','confirm.delete_task':'Poistetaanko tehtävä?','alert.choose_child_first':'Valitse ensin lapsi',
			'ui.toggle_off_on':'Pois/Päällä',
			'section.tasks':'Tehtävät','form.save':'Tallenna','form.add':'Lisää','form.cancel':'Peruuta',
			'repeat.label':'Toisto','repeat.auto_assign':'Automaattinen määritys (toisto)','repeat.save':'Tallenna suunnitelma',
			'repeat.days.mon':'Ma','repeat.days.tue':'Ti','repeat.days.wed':'Ke','repeat.days.thu':'To','repeat.days.fri':'Pe','repeat.days.sat':'La','repeat.days.sun':'Su',
			'assign.disabled_auto':'Pois käytöstä: automaattinen määritys (toisto) käytössä',
			'btn.add_points':'Lisää pisteitä','btn.reset_points':'Nollaa pisteet','points.title':'Lisää pisteitä: {name}','points.quick':'Pikalisäys','points.remove':'Pikavähennys','points.custom':'Mukautettu määrä',
			'err.title_required':'Otsikko on pakollinen','err.points_required':'Pisteet ovat pakolliset','err.points_number':'Pisteiden on oltava numero','err.points_positive':'Pisteiden on oltava 0 tai enemmän',
			'status.assigned':'Määritetty','status.in_progress':'Käynnissä','status.awaiting_approval':'Odottaa hyväksyntää','status.approved':'Hyväksytty','status.rejected':'Hylätty','status.unassigned':'Ei määritetty',
			'shop.title':'Kauppa','shop.open':'Avaa kauppa','shop.item':'Tuote','shop.price':'Hinta','shop.icon':'Kuvake','shop.image':'Kuva','shop.upload':'Lataa kuva','shop.add_item':'Lisää tuote','shop.history':'Ostohistoria','shop.child':'Lapsi','shop.when':'Aika','shop.date':'Päiväys','shop.time':'Aika','shop.active':'Aktiivinen','shop.buy':'Osta',
			'shop.advanced':'Edistyneet toiminnot','shop.entity':'Entiteetti','shop.operation':'Toiminto','shop.add_action':'Lisää toiminto','shop.add_delay':'Lisää viive','shop.steps':'Vaiheet','shop.seconds':'Sekuntia','shop.minutes':'Minuuttia','shop.hours':'Tuntia','shop.delay':'Viive',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Lasta ei löytynyt. Tarkista nimi kortin asetuksista.','msg.no_tasks':'Ei tehtäviä juuri nyt.', 'btn.done':'Valmis','btn.start_task':'Aloita tehtävä','btn.complete_task':'Tehtävä valmis','lbl.awaiting':'Odottaa hyväksyntää','lbl.points':'pistettä',
			// Editor UI
			'editor.mode':'Tila','editor.mode_admin':'Ylläpito','editor.mode_kid':'Lapsi',
			'editor.child_label':'Lapsi','editor.child_placeholder':'Lapsen nimi','editor.child_select_prompt':'— Valitse lapsi —','editor.child_hint':'Lapsia ei vielä löytynyt — kirjoita nimi manuaalisesti.'
		},
		it: {
			'overview.title':'Attività recenti','overview.show_all':'Mostra tutto ({pending} in attesa)','overview.none':'Nessuna attività.',
			'card.admin_title':'Chores4Kids – Admin','input.new_child_name':'Nuovo bambino — nome','btn.add_child':'Aggiungi bambino',
			'section.children':'Bambini','th.name':'Nome','th.points':'Punti','th.pending':'In sospeso','th.actions':'Azioni','th.status':'Stato','th.assign':'Assegna',
			'btn.rename':'Rinomina','btn.delete':'Elimina','section.new_task':'Nuova attività','ph.title':'Titolo','ph.points':'Punti','ph.description':'Descrizione (opzionale)',
			'select.assign_child':'Assegna bambino','ph.icon':'Icona (mdi:...)','icon.choose':'Scegli icona','icon.clear':'Rimuovi icona','icon.none':'Nessuna','icon.search':'Cerca icona',
			'btn.create_task':'Crea attività','btn.update_task':'Aggiorna attività','btn.edit':'Modifica','editor.loaded_task':'Modifica attività esistente',
			'section.unassigned':'Attività non assegnate','btn.assign':'Assegna','section.tasks_per_child':'Attività per bambino',
			'btn.start':'Avvia','btn.back':'Riassegna','btn.awaiting':'In attesa','btn.approve':'Approva','lbl.approved':'Approvato',
			'section.scoreboard':'Classifica','confirm.delete_child':'Eliminare {name}?','confirm.delete_task':'Eliminare attività?','alert.choose_child_first':'Scegli prima un bambino',
			'ui.toggle_off_on':'Spento/Acceso',
			'section.tasks':'Attività','form.save':'Salva','form.add':'Aggiungi','form.cancel':'Annulla',
			'repeat.label':'Ripeti','repeat.auto_assign':'Assegnazione automatica (ripeti)','repeat.save':'Salva piano',
			'repeat.days.mon':'Lun','repeat.days.tue':'Mar','repeat.days.wed':'Mer','repeat.days.thu':'Gio','repeat.days.fri':'Ven','repeat.days.sat':'Sab','repeat.days.sun':'Dom',
			'assign.disabled_auto':'Disabilitato: assegnazione automatica (ripetizione) attiva',
			'btn.add_points':'Aggiungi punti','btn.reset_points':'Azzera punti','points.title':'Aggiungi punti a {name}','points.quick':'Aggiunta rapida','points.remove':'Rimozione rapida','points.custom':'Quantità personalizzata',
			'err.title_required':'Titolo obbligatorio','err.points_required':'Punti obbligatori','err.points_number':'I punti devono essere un numero','err.points_positive':'I punti devono essere 0 o più',
			'status.assigned':'Assegnata','status.in_progress':'In corso','status.awaiting_approval':'In attesa di approvazione','status.approved':'Approvata','status.rejected':'Rifiutata','status.unassigned':'Non assegnata',
			'shop.title':'Negozio','shop.open':'Apri negozio','shop.item':'Articolo','shop.price':'Prezzo','shop.icon':'Icona','shop.image':'Immagine','shop.upload':'Carica immagine','shop.add_item':'Aggiungi articolo','shop.history':'Storico acquisti','shop.child':'Bambino','shop.when':'Data e ora','shop.date':'Data','shop.time':'Ora','shop.active':'Attivo','shop.buy':'Compra',
			'shop.advanced':'Azioni avanzate','shop.entity':'Entità','shop.operation':'Operazione','shop.add_action':'Aggiungi azione','shop.add_delay':'Aggiungi ritardo','shop.steps':'Passi','shop.seconds':'Secondi','shop.minutes':'Minuti','shop.hours':'Ore','shop.delay':'Ritardo',
			'card.child_title_fallback':'Chores4Kids – {name}','msg.child_not_found':'Bambino non trovato. Controlla il nome nella configurazione della scheda.','msg.no_tasks':'Nessuna attività al momento.', 'btn.done':'Fatto','btn.start_task':'Avvia attività','btn.complete_task':'Attività completata','lbl.awaiting':'In attesa di approvazione','lbl.points':'punti',
			// Editor UI
			'editor.mode':'Modalità','editor.mode_admin':'Admin','editor.mode_kid':'Bambino',
			'editor.child_label':'Bambino','editor.child_placeholder':'Nome del bambino','editor.child_select_prompt':'— Seleziona bambino —','editor.child_hint':'Ancora nessun bambino trovato — inserisci il nome manualmente.'
		}
};
const C4K_LANG_ALIAS = { no: 'nb' };
try {
	const __EN = C4K_I18N.en || {};
	for (const __lang of Object.keys(C4K_I18N)){
		if (__lang==='en') continue; const __m = C4K_I18N[__lang] ||= {};
		for (const __k of Object.keys(__EN)){ if (!(__k in __m)) __m[__k] = __EN[__k]; }
	}
} catch {}
function c4kGetLangFromHass(hass){ const raw = hass?.locale?.language || hass?.language || navigator.language || 'en'; return String(raw).toLowerCase(); }
function c4kLocalize(key, langOrHass, vars){
	const raw = typeof langOrHass==='string'? langOrHass : c4kGetLangFromHass(langOrHass);
	const lang = String(raw).toLowerCase();
	const parts = lang.split('-');
	const candidates = [lang, parts[0], C4K_LANG_ALIAS[lang], C4K_LANG_ALIAS[parts[0]], 'en'].filter(Boolean);
	let txt = null; for (const c of candidates){ const d=C4K_I18N[c]; if (d && d[key]) { txt=d[key]; break; } }
	if (!txt) txt = C4K_I18N.en[key] || key;
	if (vars && typeof vars==='object') txt = String(txt).replace(/\{(\w+)\}/g,(_,k)=> vars[k]!==undefined?String(vars[k]):'{'+k+'}');
	return txt;
}

// Curated icon set (full list from original admin card)
const C4K_ICON_SET = [
	{ id:'mdi:broom', label:'Sweep' },
	{ id:'mdi:bucket', label:'Mop' },
	{ id:'mdi:vacuum', label:'Vacuum' },
	{ id:'mdi:robot-vacuum', label:'Robot vacuum' },
	{ id:'mdi:spray-bottle', label:'Wipe surfaces' },
	{ id:'mdi:window-closed-variant', label:'Windows' },
	{ id:'mdi:bucket-outline', label:'Bucket' },
	{ id:'mdi:washing-machine', label:'Laundry wash' },
	{ id:'mdi:tumble-dryer', label:'Laundry dry' },
	{ id:'mdi:iron', label:'Iron clothes' },
	{ id:'mdi:hanger', label:'Put away clothes' },
	{ id:'mdi:wardrobe-outline', label:'Closet' },
	{ id:'mdi:bed', label:'Make bed' },
	{ id:'mdi:bed-single', label:'Tidy room' },
	{ id:'mdi:trash-can-outline', label:'Take out trash' },
	{ id:'mdi:recycle', label:'Recycling' },
	{ id:'mdi:watering-can', label:'Water plants' },
	{ id:'mdi:flower', label:'Garden' },
	{ id:'mdi:leaf', label:'Leaves' },
	{ id:'mdi:car-wash', label:'Wash car' },
	{ id:'mdi:silverware-clean', label:'Dishes' },
	{ id:'mdi:dishwasher', label:'Load dishwasher' },
	{ id:'mdi:dishwasher-off', label:'Unload dishwasher' },
	{ id:'mdi:table-furniture', label:'Set table' },
	{ id:'mdi:table-chair', label:'Clear table' },
	{ id:'mdi:pot-steam', label:'Cook' },
	{ id:'mdi:stove', label:'Kitchen' },
	{ id:'mdi:toothbrush-paste', label:'Brush teeth' },
	{ id:'mdi:shower', label:'Shower' },
	{ id:'mdi:toilet', label:'Bathroom' },
	{ id:'mdi:book', label:'Homework' },
	{ id:'mdi:school', label:'Study' },
	{ id:'mdi:dog-side', label:'Walk dog' },
	{ id:'mdi:cat', label:'Feed cat' },
	{ id:'mdi:paw', label:'Pet care' },
	{ id:'mdi:fish', label:'Feed fish' },
	{ id:'mdi:sofa', label:'Living room' },
	{ id:'mdi:bookshelf', label:'Books' },
];

class Chores4KidsCard extends LitElement {
	static get properties(){
		return {
			hass: {},
			config: {},
			// Shared state
			_mode: { state: true },
			_childName: { state: true },
			// Admin state
			_name: { state: true }, _taskTitle: { state: true }, _taskPoints: { state: true }, _taskDesc: { state: true }, _taskIcon: { state: true }, _iconModalOpen: { state: true },
			_repeatAssign: { state: true }, _editingTask: { state: true }, _tasksModalOpen: { state: true },
			_shopModalOpen: { state: true }, _shopTitle: { state: true }, _shopPrice: { state: true }, _shopImage: { state: true }, _editItem: { state: true }, _advItem: { state: true },
			// Child state
			_shopOpen: { state: true }
		};
	}
	static get styles(){ return css`
		ha-card { padding: 16px; }
		.row { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start; margin-bottom:12px; }
		.row.fields{ display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:12px; align-items:flex-start; margin-bottom:18px; padding-right:8px; }
		@media (max-width: 900px){ .row.fields{ grid-template-columns: 1fr; } }
		.row > * { flex:1 1 220px; min-width:180px; }
		.row button { flex:0 0 auto; min-height:40px; }
		.section { margin-top:16px; }
		.list { margin-top:12px; }
		button { padding:8px 14px; border-radius:10px; border:1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); cursor:pointer; }
		button:hover { filter: brightness(1.05); }
		.btn-primary { background: var(--primary-color); color: var(--text-primary-color, #fff); border-color: transparent; }
		.btn-danger { background: var(--error-color, #d32f2f); color:#fff; border-color: transparent; }
		.btn-ghost { background: transparent; }
		button:disabled { opacity:.55; cursor:not-allowed; }
		input, select, textarea { width:100%; padding:10px 12px; border-radius:10px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); box-sizing:border-box; font: inherit; }
		input::placeholder, textarea::placeholder{ color: var(--secondary-text-color); opacity:.85; }
		textarea { resize: vertical; }
		.form-field{ width:100%; display:flex; flex-direction:column; min-width:0; box-sizing:border-box; }
		.invalid{ border-color: var(--error-color, #d32f2f) !important; }
		.error-text{ color: var(--error-color, #d32f2f); font-size:.85rem; }
		.error-space{ height:18px; margin-top:4px; }
		.table-wrap { width:100%; overflow:auto; }
		table{ width:100%; border-collapse: collapse; border-radius:14px; }
		/* Centering helper for specific tables (applied on desktop widths) */
		@media (min-width:901px){
			.table-center th, .table-center td { text-align: center !important; }
			.table-center td > div { margin-left:auto; margin-right:auto; justify-content:center; }
		}
		@media (min-width:901px){ .table-wrap table{ min-width:640px; } }
		thead{ background: color-mix(in srgb, var(--primary-color) 8%, transparent); }
		th{ text-align:left; padding:10px 12px; font-weight:600; color: var(--secondary-text-color); border-bottom:1px solid var(--divider-color); }
		td{ padding:10px 12px; border-bottom:1px solid var(--divider-color); vertical-align: middle; }
		tr:hover{ background: color-mix(in srgb, var(--primary-color) 6%, transparent); }
		tbody tr:last-child td{ border-bottom: none; }
		@media (max-width:900px){ .table-wrap{ overflow: visible; } table thead{ display:none; } table, tbody, tr, td{ display:block; width:100%; } tbody tr{ border:1px solid var(--divider-color); border-radius:12px; padding:8px 12px; margin-bottom:12px; background: var(--card-background-color); } td{ display:flex; justify-content:space-between; align-items:flex-start; border:0; padding:8px 0; flex-wrap:wrap; gap:8px; word-break: break-word; } td::before{ content: attr(data-label); font-weight:600; color: var(--secondary-text-color); margin-right:12px; flex:0 0 auto; } td:last-child{ padding-bottom:0; } }
		.badge{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; }
		.status-assigned { background: color-mix(in srgb, var(--warning-color, #ff9800) 18%, transparent); color: var(--warning-color, #ff9800); }
		.status-in_progress { background: color-mix(in srgb, var(--primary-color) 18%, transparent); color: var(--primary-color); }
		.status-awaiting_approval { background: color-mix(in srgb, var(--info-color, #03a9f4) 18%, transparent); color: var(--info-color, #03a9f4); }
		.status-approved { background: color-mix(in srgb, var(--success-color, #43a047) 18%, transparent); color: var(--success-color, #43a047); }
		.status-unassigned { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); color: var(--secondary-text-color); }
		.days{ display:flex; flex-wrap:wrap; gap:6px; }
		.day{ padding:4px 10px; border-radius:999px; border:1px solid var(--divider-color); cursor:pointer; user-select:none; }
		.day.on{ background: color-mix(in srgb, var(--primary-color) 18%, transparent); color: var(--primary-color); border-color: transparent; }
		.overlay{position:fixed;inset:0;display:none;place-items:center;background:rgba(0,0,0,.35);z-index:10000}
		.overlay.open{display:grid}
		.modal{min-width:260px;max-width:900px;border-radius:10px;border:1px solid var(--divider-color);background:var(--card-background-color);color:var(--primary-text-color);padding:12px; max-height: 90vh; overflow:auto}
		/* Admin shop responsive tweaks */
		.shop-modal h3{ margin: 0 0 8px; }
		.shop-add-row{ display:flex; align-items:center; gap:12px; }
		.shop-add-left{ display:flex; align-items:center; gap:10px; flex:2 1 360px; }
		@media (max-width: 700px){
			.shop-add-row{ flex-direction: column; align-items: stretch; }
			.shop-add-left{ width:100%; flex:0 1 auto; align-items:stretch; }
			.shop-add-row .btn-primary{ width:100%; }
			.shop-modal .img-preview{ width:56px; height:56px; }
			/* Stack action buttons inside table rows */
			.shop-modal .table-wrap td [class^="btn"],
			.shop-modal .table-wrap td .btn-ghost,
			.shop-modal .table-wrap td .btn-primary,
			.shop-modal .table-wrap td .btn-danger{ width:100%; margin:2px 0; }
			/* Make actions cell grid for better stacking */
			.shop-modal .table-wrap tbody tr td:last-child{ display:grid; gap:6px; }
			/* Allow long titles/prices to wrap without overflow */
			.shop-modal .table-wrap tbody tr td{ align-items: flex-start; word-break: break-word; }
		}
		@media (max-width:700px){ .shop-modal .shop-add-left{ flex:0 1 auto !important; } }
		/* Child view */
		.header-row{ display:flex; align-items:center; gap:10px; margin-bottom:12px; }
		.header-points{ display:inline-flex; align-items:center; gap:8px; padding:4px 10px; border-radius:999px; background: color-mix(in srgb, var(--primary-color) 18%, transparent); color: var(--primary-color); font-weight:600; }
		.tasks{ display:grid; gap:12px; }
		.task{ display:grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items:center; padding: 12px; border: 1px solid var(--divider-color); border-radius: 14px; background: var(--card-background-color); }
		.task:hover{ background: color-mix(in srgb, var(--primary-color) 6%, transparent); }
		.task-icon{ display:flex; align-items:center; justify-content:center; width: 48px; }
		.task-icon ha-icon{ --mdc-icon-size: 40px; width: 40px; height: 40px; opacity: .95; }
		.title{ font-weight:700; }
		.title.completed{ text-decoration: line-through; }
		.meta{ color: var(--secondary-text-color); font-size: 12px; display:flex; flex-wrap:wrap; gap:10px; }
		.chip{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; }
		.chip-points{ background: color-mix(in srgb, var(--warning-color, #ff9800) 18%, transparent); color: var(--warning-color, #ff9800); }
		.actions{ display:flex; gap:8px; }
		.img-preview{ width:72px; height:72px; border-radius:10px; border:1px solid var(--divider-color); background: color-mix(in srgb, var(--primary-color) 6%, transparent); object-fit:cover; }
		.file-hidden{ display:none; }
		.shop-grid{ display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:12px; }
		.shop-item{ border: 1px solid var(--divider-color); border-radius: 12px; overflow:hidden; background: var(--card-background-color); display:flex; flex-direction:column; }
		.shop-item .img-wrap{ width:100%; aspect-ratio: 1/1; background: color-mix(in srgb, var(--primary-color) 6%, transparent); overflow:hidden; display:block; }
		.shop-item .img-wrap img{ width:100%; height:100%; object-fit:cover; display:block; }
		.shop-item .body{ padding:10px; display:flex; flex-direction:column; gap:8px; align-items:center; text-align:center; }
		.shop-item .title{ font-weight:700; text-align:center; }
		.shop-item .meta{ display:flex; justify-content:center; }

		/* Mobile/desktop togglers */
			.mobile-only{ display:none; }
			.mobile-only-grid{ display:none; }
			@media (max-width:700px){
				.mobile-only{ display:block; }
				.mobile-only-grid{ display:grid; gap:10px; }
				.desktop-only{ display:none !important; }
			}

		/* Admin shop mobile cards */
		.shop-admin-card{ border:1px solid var(--divider-color); border-radius:12px; padding:10px; background: var(--card-background-color); display:flex; flex-direction:column; gap:8px; overflow:hidden; }
		.shop-admin-head{ display:flex; align-items:center; gap:10px; flex-wrap: wrap; }
		.shop-admin-head img{ width:44px; height:44px; border-radius:8px; object-fit:cover; }
		.shop-admin-title{ font-weight:700; }
		.shop-admin-price{ font-weight:700; color: var(--warning-color, #ff9800); margin-top:2px; }
		.shop-admin-meta{ flex:1; display:flex; flex-direction:column; }
		.shop-admin-toggle{ margin-left:auto; display:flex; align-items:center; gap:6px; }
		.shop-admin-actions{ display:grid; grid-template-columns: 1fr; gap:6px; }
		.purchase-card{ border:1px solid var(--divider-color); border-radius:12px; padding:10px; background: var(--card-background-color); display:grid; gap:6px; }
		.kv{ display:flex; justify-content:space-between; gap:10px; }

		/* Reduce extra whitespace inside shop modal */
		.shop-modal h3{ margin: 0 0 8px; }
		.shop-modal .row{ margin: 4px 0 !important; }
		.shop-modal .row.fields{ margin: 4px 0 !important; gap:6px !important; }
		.shop-modal .row.fields .form-field{ margin:0 !important; }
		.shop-modal .shop-add-row{ margin: 4px 0 !important; }
		.shop-modal .shop-add-left{ gap:8px; }
		@media (max-width:700px){ .shop-admin-toggle{ width:100%; justify-content:flex-end; } }
	`; }

	constructor(){
		super();
		// Defaults
		this._mode = 'admin';
		this._childName = '';
		// Admin
		this._repeatDays = new Set();
		this._repeatAssign = '';
		this._editingTask = null;
		this._taskIcon = '';
		this._iconModalOpen = false;
		this._tasksModalOpen = false;
		this._shopModalOpen = false;
		this._shopTitle = ''; this._shopPrice = ''; this._shopImage = '';
		this._editItem = null; this._advItem = null; this._advSteps = [];
		this._touchedTitle = false; this._touchedPoints = false;
		// Child
		this._shopOpen = false;
		// caches
		this._idTasks = null; this._idShop = null; this._idChild = null;
		try{ this._iconRecents = JSON.parse(localStorage.getItem('c4k_icn_recent')||'[]') || []; }catch{ this._iconRecents = []; }
		this._iconSearch = '';
	}

	setConfig(config){
		// config: { mode: 'admin' | 'kid', child?: 'Name' }
		this.config = config || {};
		this._mode = this.config.mode || 'admin';
		this._childName = this.config.child || '';
	}

	static getConfigElement(){ return document.createElement('chores4kids-card-editor'); }
	static getStubConfig(){ return { mode: 'admin' }; }

	getCardSize(){ return this._mode==='admin'? 8 : 3; }

	// Helpers
	_t(key, vars){ return c4kLocalize(key, this.hass || navigator.language || 'en', vars); }
	_statusLabel(s){ return this._t(`status.${s}`) || s; }
	_autoAssignActive(task){ try{ const d=Array.isArray(task?.repeat_days)? task.repeat_days:[]; const k=task?.repeat_child_id; return d.length>0 && !!k; }catch{ return false; } }
	_locale(){ return c4kGetLangFromHass(this.hass || navigator.language || 'en'); }
	_fmtDateTime(ts){
		try{
			const d = ts ? new Date(ts) : null; if (!d || isNaN(d.getTime())) return { date:'—', time:'—' };
			const loc = this._locale();
			const date = new Intl.DateTimeFormat(loc, { year:'numeric', month:'2-digit', day:'2-digit' }).format(d);
			const time = new Intl.DateTimeFormat(loc, { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false }).format(d);
			return { date, time };
		}catch{ return { date:String(ts||''), time:'' }; }
	}

	// ===== STORE =====
	get _store(){
		const states = this.hass?.states || {};
		const children = Object.values(states)
			.filter((s)=> s && s.entity_id?.startsWith('sensor.') && s.attributes?.child_id && (s.attributes?.slug !== undefined))
			.map((s)=> ({ id: s.attributes.child_id, name: s.attributes.name, slug: s.attributes.slug, points: Number(s.state||0), tasks: s.attributes.tasks||[] }));
		// tasks
		let allTasksSensor = this._idTasks && states[this._idTasks];
		if (!allTasksSensor){ allTasksSensor = Object.values(states).find((s)=> s?.entity_id?.includes('chores4kids_tasks') && s.attributes?.tasks); if (allTasksSensor?.entity_id) this._idTasks = allTasksSensor.entity_id; }
		const allTasks = allTasksSensor?.attributes?.tasks || [];
		// shop
		let shopSensor = this._idShop && states[this._idShop];
		if (!shopSensor){ shopSensor = Object.values(states).find((s)=> s?.entity_id?.includes('chores4kids_shop')); if (shopSensor?.entity_id) this._idShop = shopSensor.entity_id; }
		const items = shopSensor?.attributes?.items || [];
		const purchases = shopSensor?.attributes?.purchases || [];
		return { children, allTasks, items, purchases };
	}

	// ===== RENDER =====
	render(){
		return this._mode==='admin' ? this._renderAdmin() : this._renderChild();
	}

	// ------- ADMIN VIEW -------
	_renderAdmin(){
		const { children } = this._store; const totalKids = children.length;
		const showScoreboard = this.config?.show_scoreboard !== false;
		return html`
			<ha-card header="${this._t('card.admin_title')}">
				<div class="card-content">
					<div class="row">
						<input placeholder="${this._t('input.new_child_name')}" .value=${this._name||''} @input=${(e)=>this._name=e.target.value} />
						<button class="btn-primary" @click=${this._addChild}>${this._t('btn.add_child')}</button>
						<button class="btn-ghost" style="margin-left:auto; min-height:40px;" @click=${()=>this._shopModalOpen=true}>${this._t('shop.open')}</button>
					</div>

					<div class="list section">
						<h3>${this._t('section.children')} (${totalKids})</h3>
						<div class="table-wrap"><table class="table-center">
							<thead><tr><th>${this._t('th.name')}</th><th>${this._t('th.points')}</th><th>${this._t('th.pending')}</th><th>${this._t('th.actions')}</th></tr></thead>
							<tbody>
								${children.map((c)=> html`
									<tr>
										<td data-label="${this._t('th.name')}">${c.name}</td>
										<td data-label="${this._t('th.points')}"><b>${c.points}</b></td>
										<td data-label="${this._t('th.pending')}"><span class="badge status-awaiting_approval">${(c.tasks||[]).filter(t=>t.status==="awaiting_approval").length}</span></td>
										<td data-label="${this._t('th.actions')}">
											<button class="btn-ghost" @click=${()=>this._promptRename(c)}>${this._t('btn.rename')}</button>
											<button class="btn-ghost" @click=${()=>this._openPoints(c)}>${this._t('btn.add_points')}</button>
											<button class="btn-ghost" @click=${()=>this._resetPoints(c)}>${this._t('btn.reset_points')}</button>
											<button class="btn-danger" @click=${()=>this._removeChild(c)}>${this._t('btn.delete')}</button>
										</td>
									</tr>
								`)}
							</tbody>
						</table></div>
					</div>

					<hr />
					<h3>${this._t('section.new_task')}</h3>
					<div class="row fields">
						<div class="form-field title">
							<input class="${this._showTitleError? 'invalid':''}" placeholder="${this._t('ph.title')}" .value=${this._taskTitle||''} @input=${e=>{this._taskTitle=e.target.value; this.requestUpdate();}} @blur=${()=>{this._touchedTitle=true; this.requestUpdate();}} />
							<div class="error-space">${this._showTitleError? html`<span class="error-text">${this._t('err.title_required')}</span>`:''}</div>
						</div>
						<div class="form-field points">
							<input class="${this._showPointsError? 'invalid':''}" type="number" placeholder="${this._t('ph.points')}" .value=${this._taskPoints||''} @input=${e=>{this._taskPoints=e.target.value; this.requestUpdate();}} @blur=${()=>{this._touchedPoints=true; this.requestUpdate();}} />
							<div class="error-space">${this._pointsErrorKey? html`<span class="error-text">${this._t(this._pointsErrorKey)}</span>`:''}</div>
						</div>
					</div>
					<div class="row"><textarea rows="2" placeholder="${this._t('ph.description')}" .value=${this._taskDesc||''} @input=${e=>this._taskDesc=e.target.value}></textarea></div>
					<div class="row">
						<div style="flex:2 1 300px;">
							<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('repeat.label')}</div>
							<div class="days">
								${['mon','tue','wed','thu','fri','sat','sun'].map(k=> html`
									<span class="day ${this._repeatDays.has(k)?'on':''}" @click=${()=>{ const s=this._repeatDays; s.has(k)?s.delete(k):s.add(k); this.requestUpdate(); }}>${this._t('repeat.days.'+k)}</span>
								`)}
							</div>
						</div>
						<div style="flex:1 1 220px;">
							<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:4px;">${this._t('repeat.auto_assign')}</div>
							<select @change=${e=>this._repeatAssign=e.target.value}><option value="">—</option>${children.map(c=> html`<option value=${c.id}>${c.name}</option>`)}</select>
						</div>
					</div>
					<div class="row">
						<button type="button" class="btn-ghost" @click=${()=> this._iconModalOpen = true}>${this._t('icon.choose')}</button>
						${this._editingTask ? html`
							<button class="btn-primary" @click=${this._saveEditedTask}>${this._t('btn.update_task')}</button>
							<span style="font-size:.9rem; color: var(--secondary-text-color);">${this._t('editor.loaded_task')}</span>
						` : html`
							<button class="btn-primary" ?disabled=${this._hasFormErrors} @click=${this._createTask}>${this._t('btn.create_task')}</button>
						`}
					</div>

					<hr />
					<h3>${this._t('section.tasks')}</h3>
					<div class="table-wrap"><table class="table-center">
						<thead><tr><th>${this._t('ph.title')}</th><th>${this._t('ph.points')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
						<tbody>
							${this._store.allTasks.filter(t=>!t.assigned_to).map(t=> html`
								<tr>
									<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
									<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>
									<td data-label="${this._t('th.assign')}">
										<select .value=${t._assignTo||''} @change=${e=> t._assignTo = e.target.value}>
											<option value="">${this._t('select.assign_child')}</option>
											${this._store.children.map(c=> html`<option value=${c.id}>${c.name}</option>`)}
										</select>
									</td>
									<td data-label="${this._t('th.actions')}">
										<button class="btn-ghost" @click=${()=> this._editTask(t)}>${this._t('btn.edit')}</button>
										<button class="btn-primary" ?disabled=${this._autoAssignActive(t)} title="${this._autoAssignActive(t)? this._t('assign.disabled_auto') : ''}" @click=${()=> this._assignTask(t, t._assignTo)}>${this._t('btn.assign')}</button>
										<button class="btn-danger" @click=${()=> this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
									</td>
								</tr>
							`)}
						</tbody>
					</table></div>

					<hr />
					<h3>${this._t('overview.title')}</h3>
					${(()=>{
						const all=(this._store.allTasks||[]).filter(t=>!!t.assigned_to); if(!all.length) return html`<i>${this._t('overview.none')}</i>`;
						const parse=(x)=>{ try{ return x? new Date(x).getTime():0; }catch{return 0;} };
						const sorted=[...all].sort((a,b)=> (b.status==='awaiting_approval') - (a.status==='awaiting_approval') || parse(b.created)-parse(a.created));
						const top=sorted.slice(0,3); const pending=all.filter(t=>t.status==='awaiting_approval').length;
						const row=(t)=> html`<tr>
							<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
							<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>
							<td data-label="${this._t('th.status')}"><span class="badge status-${t.status}">${this._statusLabel(t.status)}</span></td>
							<td data-label="${this._t('th.actions')}">
								${t.status==="assigned" ? html`
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: t.status==="in_progress" ? html`
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'awaiting_approval')}>${this._t('btn.awaiting')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: t.status==="awaiting_approval" ? html`
									<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
									<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
									<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>
								`: html`<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`}
							</td>
						</tr>`;
						return html`
							<div class="table-wrap"><table class="table-center">
								<thead><tr><th>${this._t('ph.title')}</th><th>${this._t('ph.points')}</th><th>${this._t('th.status')}</th><th>${this._t('th.actions')}</th></tr></thead>
								<tbody>${top.map(row)}</tbody>
							</table></div>
							<div class="row" style="justify-content:flex-end;">${all.length>3? html`<button class="btn-primary" @click=${()=>this._tasksModalOpen=true}>${this._t('overview.show_all',{pending})}</button>`:''}</div>
						`;
					})()}

				${showScoreboard ? html`
					<hr />
					<h3>${this._t('section.scoreboard')}</h3>
					<ol style="display:grid; gap:8px; padding-left:18px;">
						${[...children].sort((a,b)=>b.points-a.points).map((c,i)=> html`
							<li style="display:flex; align-items:center; gap:10px;"><span class="badge status-in_progress">#${i+1}</span><span style="flex:1;">${c.name}</span><b>${c.points}</b></li>
						`)}
					</ol>
				` : ''}
				</div>

				${this._renderPointsModal()}
				${this._renderAllTasksModal()}
				${this._renderShopModal()}
				${this._renderAdvancedModal()}
			</ha-card>
			${this._renderIconModal()}
		`;
	}

	_renderPointsModal(){
		return html`<div class="overlay ${this._pointsChild?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._closePoints(); }}>
			<div class="modal" @click=${e=>e.stopPropagation()}>
				<h3>${this._pointsChild ? this._t('points.title', { name: this._pointsChild.name }) : ''}</h3>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.quick')}</div>
				<div class="row" style="gap:8px;">${[5,10,15,20].map(n=> html`<button class="btn-primary" @click=${()=>this._addPointsQuick(n)}>+${n}</button>`)}</div>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.remove')}</div>
				<div class="row" style="gap:8px;">${[5,10,15,20].map(n=> html`<button class="btn-danger" @click=${()=>this._addPointsQuick(-n)}>−${n}</button>`)}</div>
				<div style="font-size:.85rem; color: var(--secondary-text-color);">${this._t('points.custom')}</div>
				<div class="row" style="gap:6px; align-items:center;">
					<input type="number" .value=${String(this._pointsValue||0)} @input=${e=> this._pointsValue = Number(e.target.value||0)} style="max-width:120px;" />
					<button class="btn-primary" @click=${()=>this._addPointsQuick(this._pointsValue||0)}>${this._t('form.add')}</button>
					<button class="btn-ghost" @click=${this._closePoints}>${this._t('form.cancel')}</button>
				</div>
			</div>
		</div>`;
	}
	_renderAllTasksModal(){
		return html`<div class="overlay ${this._tasksModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._tasksModalOpen=false; }}>
			${this._tasksModalOpen ? html`<div class="modal" style="max-width: 820px; width: min(95vw, 820px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('overview.title')}</h3>
				<div style="max-height:60vh; overflow:auto;">
					<div class="table-wrap"><table class="table-center">
						<thead><tr><th>${this._t('ph.title')}</th><th>${this._t('ph.points')}</th><th>${this._t('th.status')}</th><th>${this._t('th.assign')}</th><th>${this._t('th.actions')}</th></tr></thead>
						<tbody>${(()=>{
							const all=(this._store.allTasks||[]).filter(t=>!!t.assigned_to);
							const parse=(x)=>{ try{ return x? new Date(x).getTime():0; }catch{return 0;} };
							const sorted=[...all].sort((a,b)=> (b.status==='awaiting_approval') - (a.status==='awaiting_approval') || parse(b.created)-parse(a.created));
							return sorted.map((t)=> html`<tr>
								<td data-label="${this._t('ph.title')}">${t.title}${t.icon? html` <ha-icon class="inline-ico" icon="${t.icon}"></ha-icon>`:''}</td>
								<td data-label="${this._t('ph.points')}"><b>${t.points}</b></td>
								<td data-label="${this._t('th.status')}"><span class="badge status-${t.status}">${this._statusLabel(t.status)}</span></td>
								<td data-label="${this._t('th.assign')}">${t.assigned_to_name || this._t('status.unassigned')}</td>
								<td data-label="${this._t('th.actions')}">
									${t.status==="assigned" ? html`<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: t.status==="in_progress" ? html`
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'awaiting_approval')}>${this._t('btn.awaiting')}</button>
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
											<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: t.status==="awaiting_approval" ? html`
											<button class="btn-primary" @click=${()=>this._approve(t)}>${this._t('btn.approve')}</button>
											<button class="btn-ghost" @click=${()=>this._setStatus(t.id,'assigned')}>${this._t('btn.back')}</button>
											<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`
										: html`<button class="btn-danger" @click=${()=>this._deleteTask(t.id)}>${this._t('btn.delete')}</button>`}
								</td>
							</tr>`);
						})()}</tbody>
					</table></div>
				</div>
				<div class="row" style="justify-content:flex-end; margin-top:8px;"><button class="btn-ghost" @click=${()=>this._tasksModalOpen=false}>${this._t('form.cancel')}</button></div>
			</div>`: ''}
		</div>`;
	}
	_renderShopModal(){
		return html`<div class="overlay ${this._shopModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._shopModalOpen=false; }}>
			<div class="modal shop-modal" style="max-width: 860px; width: min(95vw, 860px);" @click=${e=>e.stopPropagation()}>
                <h3>${this._t('shop.title')}</h3>
				<div class="row fields">
					<div class="form-field title"><input placeholder="${this._t('shop.item')}" .value=${this._shopTitle||''} @input=${e=>this._shopTitle=e.target.value} /></div>
					<div class="form-field points"><input type="number" placeholder="${this._t('shop.price')}" .value=${this._shopPrice||''} @input=${e=>this._shopPrice=e.target.value} /></div>
				</div>
				<div class="shop-add-row">
					<div class="shop-add-left">
						${this._shopImage ? html`<img class="img-preview" src="${this._shopImage}" alt="preview" loading="lazy" decoding="async"/>` : html`<div class="img-preview" style="display:grid;place-items:center;color:var(--secondary-text-color);">${this._t('shop.image')}</div>`}
						<input id="c4k-shop-file" class="file-hidden" type="file" accept="image/*" @change=${this._onPickImage} />
						<button class="btn-ghost" @click=${()=> this.shadowRoot.getElementById('c4k-shop-file')?.click()}>${this._t('shop.upload')}</button>
					</div>
					<button class="btn-primary" style="flex:0 0 auto;" @click=${this._addShopItem}>${this._t('shop.add_item')}</button>
				</div>
								<div class="table-wrap desktop-only"><table class="table-center">
					<thead><tr><th>${this._t('shop.item')}</th><th>${this._t('shop.price')}</th><th>${this._t('shop.active')}</th><th>${this._t('th.actions')}</th></tr></thead>
					<tbody>
						${this._store.items.map(i=> html`
							${this._editItem && this._editItem.id===i.id ? html`
								<tr>
									<td data-label="${this._t('shop.item')}"><div style="display:flex; align-items:center; gap:8px;">${this._editItem.image? html`<img class="img-preview" style="width:36px;height:36px;" src="${this._editItem.image}" loading="lazy" decoding="async">`:''}<input style="max-width:220px;" .value=${this._editItem.title||''} @input=${e=> this._editItem={...this._editItem, title:e.target.value}} /><input type="file" accept="image/*" @change=${this._onPickEditImage} /></div></td>
									<td data-label="${this._t('shop.price')}"><input type="number" style="max-width:120px;" .value=${this._editItem.price||0} @input=${e=> this._editItem={...this._editItem, price:Number(e.target.value||0)}} /></td>
									<td data-label="${this._t('shop.active')}"><input type="checkbox" .checked=${this._editItem.active!==false} @change=${e=> this._editItem={...this._editItem, active: e.target.checked}} /></td>
									<td data-label="${this._t('th.actions')}"><button class="btn-primary" @click=${this._saveEditItem}>${this._t('form.save')}</button><button class="btn-ghost" @click=${()=>{this._editItem=null; this.requestUpdate();}}>${this._t('form.cancel')}</button></td>
								</tr>
							`: html`
								<tr>
									<td data-label="${this._t('shop.item')}">${i.image? html`<img class="img-preview" style="width:36px;height:36px;margin-right:6px;vertical-align:middle;" src="${i.image}" loading="lazy" decoding="async">`:''}${i.title}</td>
									<td data-label="${this._t('shop.price')}"><b>${i.price}</b></td>
									<td data-label="${this._t('shop.active')}"><input type="checkbox" .checked=${i.active!==false} @change=${e=> this._toggleItemActive(i,e)} /></td>
									<td data-label="${this._t('th.actions')}"><button class="btn-ghost" @click=${()=> this._startEditItem(i)}>${this._t('btn.edit')}</button><button class="btn-ghost" @click=${()=> this._openAdvanced(i)}>${this._t('shop.advanced')}</button><button class="btn-danger" @click=${()=>this._deleteShopItem(i.id)}>${this._t('btn.delete')}</button></td>
								</tr>
							`}
						`)}
					</tbody>
				</table></div>
								<!-- Mobile cards for items -->
								<div class="mobile-only mobile-only-grid">
									${this._store.items.map(i=> html`
										<div class="shop-admin-card">
											<div class="shop-admin-head">
												${i.image? html`<img src="${i.image}" alt="${i.title}" loading="lazy" decoding="async">` : html`<div class="img-preview" style="width:44px;height:44px;display:grid;place-items:center;">?</div>`}
												<div class="shop-admin-meta">
													<div class="shop-admin-title">${i.title}</div>
													<div class="shop-admin-price">${i.price}</div>
												</div>
																								<label class="shop-admin-toggle">
																									<span>${this._t('shop.active')}</span>
																									<ha-switch .checked=${i.active!==false} @change=${e=> this._toggleItemActive(i,e)}></ha-switch>
																								</label>
											</div>
											<div class="shop-admin-actions">
												<button class="btn-ghost" @click=${()=> this._startEditItem(i)}>${this._t('btn.edit')}</button>
												<button class="btn-ghost" @click=${()=> this._openAdvanced(i)}>${this._t('shop.advanced')}</button>
												<button class="btn-danger" @click=${()=> this._deleteShopItem(i.id)}>${this._t('btn.delete')}</button>
											</div>
										</div>
									`)}
								</div>
				<div class="row" style="align-items:center; justify-content:space-between; margin-top:12px;">
					<h3 style="margin:0;">${this._t('shop.history')}</h3>
					${(this._store.purchases||[]).length ? html`<button class="btn-danger" @click=${this._clearShopHistory}>${this._t('shop.clear_history')}</button>`:''}
				</div>
								<div class="table-wrap desktop-only"><table class="table-center">
					<thead><tr><th>${this._t('shop.date')}</th><th>${this._t('shop.time')}</th><th>${this._t('shop.child')}</th><th>${this._t('shop.item')}</th><th>${this._t('shop.price')}</th></tr></thead>
					<tbody>
						${[...(this._store.purchases||[])].slice().reverse().map(p=> { const dt=this._fmtDateTime(p.ts); return html`<tr>
							<td data-label="${this._t('shop.date')}">${dt.date}</td>
							<td data-label="${this._t('shop.time')}">${dt.time}</td>
							<td data-label="${this._t('shop.child')}">${p.child_name||p.child_id}</td>
							<td data-label="${this._t('shop.item')}">${p.title}</td>
							<td data-label="${this._t('shop.price')}"><b>${p.price}</b></td>
						</tr>`; })}
					</tbody>
				</table></div>
								<!-- Mobile cards for purchases -->
								<div class="mobile-only mobile-only-grid">
									${[...(this._store.purchases||[])].slice().reverse().map(p=> { const dt=this._fmtDateTime(p.ts); return html`
										<div class="purchase-card">
											<div class="kv"><b>${this._t('shop.date')}</b><span>${dt.date}</span></div>
											<div class="kv"><b>${this._t('shop.time')}</b><span>${dt.time}</span></div>
											<div class="kv"><b>${this._t('shop.child')}</b><span>${p.child_name||p.child_id}</span></div>
											<div class="kv"><b>${this._t('shop.item')}</b><span>${p.title}</span></div>
											<div class="kv"><b>${this._t('shop.price')}</b><b>${p.price}</b></div>
										</div>`; })}
								</div>
				<div class="row" style="justify-content:flex-end; margin-top:8px;"><button class="btn-ghost" @click=${()=>this._shopModalOpen=false}>${this._t('form.cancel')}</button></div>
			</div>
		</div>`;
	}
	_renderAdvancedModal(){
		return html`<div class="overlay ${this._advItem?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._advItem=null; }}>
			${this._advItem ? html`<div class="modal" style="max-width: 900px; width: min(95vw, 900px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('shop.advanced')} — ${this._advItem.title}</h3>
				<div style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:6px;">${this._t('shop.steps')}</div>
				<div style="display:grid; gap:8px;">${(this._advSteps||[]).map((st,idx)=> html`
					<div style="display:grid; grid-template-columns: 1fr auto; gap:8px; align-items:center; border:1px solid var(--divider-color); padding:8px; border-radius:8px;">
						${st.type==='delay' ? html`<div style="display:flex; gap:8px; align-items:center;"><b>${this._t('shop.delay')}</b><input type="number" style="width:110px;" .value=${st.seconds||0} @input=${e=>{ st.seconds=Number(e.target.value||0); this.requestUpdate(); }} /><span>${this._t('shop.seconds')}</span></div>` : html`
							<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
								<b>${this._t('shop.entity')}</b>
								<select style="min-width:260px;" .value=${st.entity_id||''} @change=${e=>{ st.entity_id=e.target.value; st.op = st.op || this._defaultOpFor(st.entity_id); this.requestUpdate(); }}>
									<option value="">—</option>
									${(()=>{ const ents=Object.values(this.hass.states); const cur=st.entity_id||''; const exists=cur && ents.some(x=>x.entity_id===cur); return html`${!exists&&cur? html`<option value=${cur} selected>${cur}</option>`:''}${ents.map(s=> html`<option value=${s.entity_id} ?selected=${s.entity_id===cur}>${s.attributes.friendly_name||s.entity_id}</option>`)}`; })()}
								</select>
								<b>${this._t('shop.operation')}</b>
								<select .value=${st.op||this._defaultOpFor(st.entity_id)} @change=${e=>{ st.op=e.target.value; this.requestUpdate(); }}>
									${this._opsForDomain((st.entity_id||'').split('.')[0]).map(op=> html`<option value=${op}>${op}</option>`)}</select>
							</div>`}
						<button class="btn-danger" @click=${()=>{ this._advSteps.splice(idx,1); this.requestUpdate(); }}>${this._t('btn.delete')}</button>
					</div>`)}
				</div>
				<div class="row" style="gap:8px; margin-top:10px;">
					<button class="btn-ghost" @click=${()=>{ this._advSteps.push({ type:'entity_service', entity_id:'', op:'turn_on' }); this.requestUpdate(); }}>${this._t('shop.add_action')}</button>
					<button class="btn-ghost" @click=${()=>{ this._advSteps.push({ type:'delay', seconds:60 }); this.requestUpdate(); }}>${this._t('shop.add_delay')}</button>
				</div>
				<div class="row" style="justify-content:flex-end; gap:8px; margin-top:10px;">
					<button class="btn-ghost" @click=${()=>{ this._advItem=null; }}>${this._t('form.cancel')}</button>
					<button class="btn-primary" @click=${this._saveAdvanced}>${this._t('form.save')}</button>
				</div>
			</div>`: ''}
		</div>`;
	}
	_renderIconModal(){
		return html`<div class="overlay ${this._iconModalOpen?'open':''}" @click=${e=>{ if (e.target.classList.contains('overlay')) this._iconModalOpen=false; }}>
			<div class="modal" style="max-width: 560px; width: min(95vw, 560px);" @click=${e=>e.stopPropagation()}>
				<h3>${this._t('icon.choose')}</h3>
				<div class="row" style="gap:8px; align-items:center;">
					<input style="flex:1" placeholder="${this._t('icon.search')}" .value=${this._iconSearch||''} @input=${e=>{ this._iconSearch=e.target.value; this.requestUpdate(); }} />
					${this._taskIcon ? html`<button class="btn-ghost" @click=${()=>{ this._taskIcon=''; this.requestUpdate(); }}>${this._t('icon.clear')}</button>`: ''}
				</div>
				${(()=>{ const q=String(this._iconSearch||'').toLowerCase(); const filter=(arr)=> arr.filter(i=> i.id.toLowerCase().includes(q) || (i.label||'').toLowerCase().includes(q)); const recent=filter((this._iconRecents||[]).map(id=> ({id, label:(C4K_ICON_SET.find(x=>x.id===id)?.label)||id}))).slice(0,12); const base=filter(C4K_ICON_SET); const tile=(i)=> html`<button class="btn-ghost" style="display:flex;align-items:center;gap:8px;border:1px solid var(--divider-color);border-radius:8px;padding:8px;" @click=${()=> this._pickIcon(i.id)}><ha-icon icon="${i.id}"></ha-icon><small>${i.label||i.id}</small></button>`; return html`${recent.length? html`<div style="font-size:.9rem;color:var(--secondary-text-color);margin:6px 0;">Recent</div>`:''}${recent.length? html`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${recent.map(tile)}</div>`:''}<div style="font-size:.9rem;color:var(--secondary-text-color);margin:6px 0;">All</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${base.map(tile)}</div>`; })()}
				<div class="row" style="justify-content:flex-end; margin-top:10px;"><button class="btn-ghost" @click=${()=> this._iconModalOpen=false}>${this._t('form.cancel')}</button></div>
			</div>
		</div>`;
	}

	// ------- CHILD VIEW -------
	_findChildSensor(){
		const childName = this._childName || this.config.child;
		if (!childName) return null;
		const slug = (v)=> (v||"")
			.normalize('NFKD')
			.replace(/[̀-ͯ]/g, '')
			.replace(/[^a-zA-Z0-9]+/g, '_')
			.replace(/^_+|_+$/g, '')
			.toLowerCase() || 'child';
		const targetSlug = slug(childName);
		if (this._idChild && this.hass.states[this._idChild]){
			const s = this.hass.states[this._idChild];
			if (s?.attributes?.child_id) return s;
		}
		const sensors = Object.values(this.hass.states).filter(s=> s.entity_id?.startsWith("sensor.") && s.attributes?.child_id);
		const found = sensors.find(s=> (s.attributes?.name||"").toLowerCase() === String(childName).toLowerCase() || (s.attributes?.slug||"") === targetSlug);
		if (found?.entity_id) this._idChild = found.entity_id; return found;
	}
	_renderChild(){
		const s = this._findChildSensor();
		if (!s){ return html`<ha-card header="${this._t('card.child_title_fallback',{name: this._childName||this.config.child||''})}"><div class="card-content">${this._t('msg.child_not_found')}</div></ha-card>`; }
		const tasks = (s.attributes.tasks||[]).filter(t=> ['assigned','in_progress','awaiting_approval','approved'].includes(t.status));
		// shop items
		let shopSensor = this._idShop && this.hass.states[this._idShop];
		if (!shopSensor){ shopSensor = Object.values(this.hass.states).find(st=> st?.entity_id?.includes('chores4kids_shop')); if (shopSensor?.entity_id) this._idShop = shopSensor.entity_id; }
		const items = this._shopOpen ? (shopSensor?.attributes?.items||[]).filter(i=> i.active!==false) : [];
		return html`
			<ha-card header="${s.attributes.name}">
				<div class="card-content">
					<div class="header-row">
						<span class="header-points">${s.state} ${this._t('lbl.points')}</span>
						<button class="btn-primary" @click=${()=>{ this._shopOpen = true; this.requestUpdate(); }}>${this._t('shop.title')}</button>
					</div>
					<div class="tasks">
						${tasks.length===0 ? html`<i>${this._t('msg.no_tasks')}</i>`: tasks.map(t=> html`
							<div class="task">
								<div class="task-icon">${t.icon? html`<ha-icon icon="${t.icon}"></ha-icon>`:''}</div>
								<div>
									<div class="title ${t.status==='approved' ? 'completed' : ''}">${t.title}</div>
									<div class="meta"><span class="chip chip-points">${t.points} ${this._t('lbl.points')}</span></div>
								</div>
								<div class="actions">
									${t.status==="assigned" ? html`<button class="btn-primary" @click=${()=>this._advance(t)}>${this._t('btn.start_task')}</button>`
										: t.status==="in_progress" ? html`<button class="btn-primary" @click=${()=>this._advance(t)}>${this._t('btn.complete_task')}</button>`
										: t.status==="awaiting_approval" ? html`<span class="chip status-awaiting_approval">${this._t('lbl.awaiting')}</span>`
										: html`<button class="btn" disabled>✓ ${this._t('btn.done')}</button>`}
								</div>
							</div>
						`)}
					</div>
					<div class="overlay ${this._shopOpen?'open':''}" @click=${e=>{ if(e.target.classList.contains('overlay')) this._shopOpen=false; }}>
						<div class="modal" @click=${e=>e.stopPropagation()}>
							<h3 style="margin:0 0 8px;">${this._t('shop.title')}</h3>
							<div class="shop-grid">
								${items.map(i=> html`
									<div class="shop-item">
										${i.image ? html`<div class="img-wrap"><img src="${i.image}" alt="${i.title}" loading="lazy" decoding="async"></div>` : html`<div class="img-wrap" style="display:grid;place-items:center;opacity:.7;">${i.icon? html`<ha-icon icon="${i.icon}" style="--mdc-icon-size:48px"></ha-icon>`:'?'}</div>`}
										<div class="body">
											<div class="title">${i.title}</div>
											<div class="meta"><span class="chip chip-points">${i.price} ${this._t('lbl.points')}</span></div>
											<button class="btn-primary" ?disabled=${Number(s.state)<Number(i.price)} @click=${()=>this._buy(i, s.attributes.child_id)}>${this._t('shop.buy')}</button>
										</div>
									</div>
								`)}
							</div>
							<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
								<button class="btn-ghost" @click=${()=>this._shopOpen=false}>${this._t('form.cancel')}</button>
							</div>
						</div>
					</div>
				</div>
			</ha-card>`;
	}

	// ===== Actions (admin + child) =====
	async _addChild(){ if(!this._name) return; await this.hass.callService('chores4kids','add_child',{ name: this._name }); this._name=''; }
	async _removeChild(c){ if(!confirm(this._t('confirm.delete_child',{name:c.name}))) return; await this.hass.callService('chores4kids','remove_child',{ child_id: c.id }); }
	_openPoints(c){ this._pointsChild=c; this._pointsValue=5; this.requestUpdate(); }
	_closePoints=()=>{ this._pointsChild=null; this.requestUpdate(); }
	async _addPointsQuick(n){ if(!this._pointsChild) return; const pts=Number(n||0); if(!Number.isFinite(pts)||pts===0) return; await this.hass.callService('chores4kids','add_points',{ child_id: this._pointsChild.id, points: pts }); this._closePoints(); }
	async _resetPoints(c){ if(!confirm(this._t('btn.reset_points')+'?')) return; await this.hass.callService('chores4kids','reset_points',{ child_id: c.id }); }
	async _promptRename(c){ const nn=prompt(this._t('btn.rename'), c.name); if(!nn || nn===c.name) return; await this.hass.callService('chores4kids','rename_child',{ child_id:c.id, new_name: nn }); }
	get _showTitleError(){ return (this._touchedTitle && !(String(this._taskTitle||'').trim().length>0)); }
	get _pointsErrorKey(){ if(!this._touchedPoints) return null; const raw=String(this._taskPoints??'').trim(); if(raw==='') return 'err.points_required'; const n=Number(raw); if(!Number.isFinite(n)) return 'err.points_number'; if(n<0) return 'err.points_positive'; return null; }
	get _showPointsError(){ return !!this._pointsErrorKey; }
	get _hasFormErrors(){ return this._showTitleError || this._showPointsError; }
	_pickIcon(id){ this._taskIcon=id; try{ const arr=Array.isArray(this._iconRecents)? [...this._iconRecents]:[]; const next=[id,...arr.filter(x=>x!==id)].slice(0,12); this._iconRecents=next; localStorage.setItem('c4k_icn_recent', JSON.stringify(next)); }catch{} this._iconModalOpen=false; this.requestUpdate(); }
	async _createTask(){
		this._touchedTitle=true; this._touchedPoints=true;
		if(this._hasFormErrors) return;
		await this.hass.callService('chores4kids','add_task',{
			title:this._taskTitle,
			points:Number(this._taskPoints),
			description:this._taskDesc||'',
			icon:this._taskIcon||undefined,
			repeat_days:Array.from(this._repeatDays||[]),
			repeat_child_id: this._repeatAssign || undefined
		});
		// Clear form and reset validation state so inputs don't show errors
		this._taskTitle=this._taskPoints=this._taskDesc=this._taskIcon='';
		this._repeatDays=new Set();
		this._repeatAssign='';
		this._touchedTitle=false; this._touchedPoints=false;
	}
	async _setStatus(taskId,status){ await this.hass.callService('chores4kids','set_task_status',{ task_id: taskId, status }); }
	async _approve(task){ await this.hass.callService('chores4kids','approve_task',{ task_id: task.id }); }
	async _assignTask(task, childId){ if(!childId){ alert(this._t('alert.choose_child_first')); return; } await this.hass.callService('chores4kids','assign_task',{ task_id: task.id, child_id: childId }); task._assignTo=''; this.requestUpdate(); }
	_editTask(t){ this._editingTask=t; this._taskTitle=t.title; this._taskPoints=t.points; this._taskDesc=t.description||''; this._taskIcon=t.icon||''; const map=["mon","tue","wed","thu","fri","sat","sun"]; const fromAttr=Array.isArray(t.repeat_days)? t.repeat_days.map(d=> typeof d==='number'? map[d] : String(d).slice(0,3)) : []; this._repeatDays=new Set(fromAttr); this._repeatAssign=t.repeat_child_id||''; }
	async _saveEditedTask(){ if(!this._editingTask) return; try{ await this.hass.callService('chores4kids','set_task_repeat',{ task_id: this._editingTask.id, repeat_days:Array.from(this._repeatDays||[]), repeat_child_id: this._repeatAssign||undefined }); await this.hass.callService('chores4kids','set_task_icon',{ task_id: this._editingTask.id, icon: this._taskIcon||'' }); } finally { this._editingTask=null; this._taskTitle=this._taskPoints=this._taskDesc=this._taskIcon=''; this._repeatDays=new Set(); this._repeatAssign=''; this._touchedTitle=false; this._touchedPoints=false; } }
	async _deleteTask(taskId){ if(!confirm(this._t('confirm.delete_task'))) return; await this.hass.callService('chores4kids','delete_task',{ task_id: taskId }); }
	async _addShopItem(){ const title=String(this._shopTitle||'').trim(); const price=Number(this._shopPrice||0); if(!title || !Number.isFinite(price)) return; await this.hass.callService('chores4kids','add_shop_item',{ title, price, image: this._shopImage||undefined }); this._shopTitle=this._shopPrice=this._shopImage=''; try{ const el=this.shadowRoot.getElementById('c4k-shop-file'); if(el) el.value=''; }catch{} }
	async _deleteShopItem(id){ if(!id) return; await this.hass.callService('chores4kids','delete_shop_item',{ item_id: id }); }
	async _clearShopHistory(){
		if(!confirm(this._t('confirm.clear_history'))) return;
		try{
			await this.hass.callService('chores4kids','clear_shop_history',{});
		}catch(err){
			try{
				await this.hass.callService('chores4kids','reset_shop_history',{});
			}catch(err2){
				alert('Service chores4kids.clear_shop_history not available');
			}
		}
	}
	async _onPickImage(e){ const f=e.target?.files?.[0]; if(!f) return; const reader=new FileReader(); reader.onload= async ()=>{ try{ const dataUrl=reader.result; const ext=(f.name.split('.').pop()||'jpg').toLowerCase(); const name=`c4k_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`; await this.hass.callService('chores4kids','upload_shop_image',{ filename:name, data:String(dataUrl) }); this._shopImage=`/local/chores4kids/${name}`; } finally { this.requestUpdate(); } }; reader.readAsDataURL(f); }
	_startEditItem(i){ this._editItem={ id:i.id, title:i.title, price:i.price, image:i.image||'', active:i.active!==false }; this.requestUpdate(); }
	async _onPickEditImage(e){ const f=e.target?.files?.[0]; if(!f) return; const reader=new FileReader(); reader.onload= async ()=>{ const dataUrl=reader.result; const ext=(f.name.split('.').pop()||'jpg').toLowerCase(); const name=`c4k_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`; await this.hass.callService('chores4kids','upload_shop_image',{ filename:name, data:String(dataUrl) }); this._editItem={ ...this._editItem, image:`/local/chores4kids/${name}` }; this.requestUpdate(); }; reader.readAsDataURL(f); }
	async _saveEditItem(){ const it=this._editItem; if(!it) return; await this.hass.callService('chores4kids','update_shop_item',{ item_id: it.id, title:String(it.title||'').trim(), price:Number(it.price||0), image: it.image||'', active: !!it.active }); this._editItem=null; this.requestUpdate(); }
	async _toggleItemActive(i,e){ const active=!!e.target.checked; await this.hass.callService('chores4kids','update_shop_item',{ item_id: i.id, active }); }
	_openAdvanced(i){ try{ const shop=Object.values(this.hass.states).find(s=> s?.entity_id?.includes('chores4kids_shop')); const latest=shop?.attributes?.items?.find?.((x)=> x.id===i.id); this._advItem=latest||i; }catch{ this._advItem=i; } const steps=Array.isArray(this._advItem.actions)? JSON.parse(JSON.stringify(this._advItem.actions)) : []; this._advSteps=steps.map(st=>{ const t=String(st?.type||'').toLowerCase(); if(t==='service'){ const ent=st.entity_id || st.data?.entity_id || ''; const op=st.service || st.op || 'turn_on'; return { type:'entity_service', entity_id: ent, op }; } if(t==='entity_service'){ return { type:'entity_service', entity_id: st.entity_id||'', op: st.op||st.service||'turn_on' }; } if(t==='delay'){ return { type:'delay', seconds: Number(st.seconds||st.secs||0) }; } return st; }); this.requestUpdate(); }
	_defaultOpFor(entity_id){ const dom=(entity_id||'').split('.')[0]; const ops=this._opsForDomain(dom); return ops[0]||'turn_on'; }
	_opsForDomain(dom){ switch(dom){ case 'switch': case 'light': case 'fan': case 'input_boolean': return ['turn_on','turn_off','toggle']; case 'media_player': return ['turn_on','turn_off','media_play','media_pause','toggle']; case 'lock': return ['lock','unlock']; default: return ['turn_on','turn_off']; } }
	async _saveAdvanced(){ if(!this._advItem) return; const actions=(this._advSteps||[]).map(st=> st.type==='delay'? { type:'delay', seconds: Number(st.seconds||0) } : { type:'entity_service', entity_id: st.entity_id, op: st.op||'turn_on' }); await this.hass.callService('chores4kids','update_shop_item',{ item_id: this._advItem.id, actions }); this._advItem=null; this._advSteps=[]; this.requestUpdate(); }
	async _advance(task){ if(!task||!task.id) return; const next=task.status==='assigned'? 'in_progress' : 'awaiting_approval'; await this.hass.callService('chores4kids','set_task_status',{ task_id: task.id, status: next }); }
	async _buy(item, childId){ if(!item?.id || !childId) return; await this.hass.callService('chores4kids','buy_shop_item',{ child_id: childId, item_id: item.id }); }
}

customElements.define('chores4kids-card', Chores4KidsCard);
// Simple GUI editor
class Chores4KidsCardEditor extends LitElement{
	static get properties(){ return { hass: {}, _config: {} }; }
	setConfig(config){ this._config = { mode:'admin', ...config }; this.requestUpdate(); }
	_t(key, vars){ return c4kLocalize(key, this.hass || navigator.language || 'en', vars); }
	_emit(){ this.dispatchEvent(new CustomEvent('config-changed',{ detail:{ config: this._config }, bubbles:true, composed:true })); }
	_getChildren(){
		try{
			const states = this.hass?.states || {};
			const names = Object.values(states)
				.filter((s)=> s && s.entity_id?.startsWith('sensor.') && s.attributes?.child_id && s.attributes?.name)
				.map((s)=> s.attributes.name)
				.filter(Boolean);
			return Array.from(new Set(names)).sort((a,b)=> String(a).localeCompare(String(b)));
		}catch{ return []; }
	}
		render(){ const cfg=this._config||{}; const kids=this._getChildren(); return html`
		<div class="card-config">
			<div class="form-field"><label>${this._t('editor.mode')}</label>
				<select .value=${cfg.mode||'admin'} @change=${e=>{ this._config={...cfg, mode:e.target.value}; this._emit(); }}>
					<option value="admin">${this._t('editor.mode_admin')}</option>
					<option value="kid">${this._t('editor.mode_kid')}</option>
				</select>
			</div>
			${cfg.mode==='admin' ? html`
				<div class="form-field" style="margin-top:8px;">
					<label>${this._t('section.scoreboard')}</label>
					<label style="display:flex;align-items:center;gap:8px;">
						<span>${this._t('ui.toggle_off_on')}</span>
						<ha-switch .checked=${cfg.show_scoreboard !== false} @change=${e=>{ this._config={...cfg, show_scoreboard: !!e.target.checked}; this._emit(); }}></ha-switch>
					</label>
				</div>
			` : ''}
			${cfg.mode==='kid' ? html`
				<div class="form-field" style="margin-top:8px;">
					<label>${this._t('editor.child_label')}</label>
					${kids.length ? html`
						<select .value=${cfg.child||''} @change=${e=>{ this._config={...cfg, child: e.target.value}; this._emit(); }}>
							<option value="">${this._t('editor.child_select_prompt')}</option>
							${cfg.child && !kids.includes(cfg.child) ? html`<option value=${cfg.child} selected>(custom) ${cfg.child}</option>`: ''}
							${kids.map(n=> html`<option value=${n}>${n}</option>`) }
						</select>
					`: html`
						<input .value=${cfg.child||''} @input=${e=>{ this._config={...cfg, child: e.target.value}; this._emit(); }} placeholder="${this._t('editor.child_placeholder')}" />
						<small style="opacity:.8;">${this._t('editor.child_hint')}</small>
					`}
				</div>
			`:''}
		</div>`; }
	static get styles(){ return css`.card-config{ display:grid; gap:8px; } label{ display:block; font-weight:600; margin-bottom:4px; } input,select{ width:100%; padding:8px 10px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); }`; }
}
customElements.define('chores4kids-card-editor', Chores4KidsCardEditor);

// Lovelace card registry
window.customCards = window.customCards || [];
window.customCards.push({ type: 'chores4kids-card', name: 'Chores4Kids (Admin/Kid)', preview: true, description: 'Kombineret kort – vælg Admin eller Barn i editoren' });

