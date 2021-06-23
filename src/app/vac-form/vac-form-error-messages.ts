export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const VacFormErrorMessages = [
  new ErrorMessage('vacday', 'required', 'Bitte geben Sie ein Datum für den Impftermin an.'),
  new ErrorMessage('vacday', 'dateValidator', 'Das Datum muss in der Zukunft liegen.'),
  new ErrorMessage('start', 'required', 'Bitte geben Sie eine Startuhrzeit für den Impftermin an.'),
  new ErrorMessage('start', 'pattern', 'Formatieren Sie die Uhrzeit wie folgt hh:mm. '),
  new ErrorMessage('end', 'required', 'Bitte geben Sie eine Enduhrzeit für den Impftermin an.'),
  new ErrorMessage('end', 'pattern', 'Formatieren Sie die Uhrzeit wie folgt hh:mm. '),
  new ErrorMessage('maxpersons', 'required', 'Bitte geben Sie eine maximale Teilnehmer*innenzahl für den Impftermin an.'),
  new ErrorMessage('maxpersons', 'max', 'Die maximale Anzahl an Teilnehmer*innen liegt bei 35 Personen.'),
  new ErrorMessage('maxpersons', 'min', 'Die minimale Anzahl an Teilnehmer*innen liegt bei 2 Personen.'),
  new ErrorMessage('vaccine', 'required', 'Bitte geben Sie den Impfstoff an.'),
  new ErrorMessage('vacplace', 'required', 'Bitte geben Sie einen Impfort an.')
];