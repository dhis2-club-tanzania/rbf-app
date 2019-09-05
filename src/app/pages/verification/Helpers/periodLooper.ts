export function setPeriodLooper(dataSelections) {
  const periodType = dataSelections[0].items[0].type;
  const periodIdentifier = dataSelections[0].items[0].id.charAt(5);
  const year = dataSelections[0].items[0].id.slice(0, 4);

  if (periodType === 'Monthly') {
    return dataSelections[0].items[0].name;
  }
  if (periodType === 'BiMonthly') {
    switch (periodIdentifier) {
      case '1':
        {
          return ['January '.concat(year), 'February '.concat(year)];
        }
        break;
      case '2':
        {
          return ['March '.concat(year), 'April '.concat(year)];
        }
        break;
      case '3':
        {
          return ['May '.concat(year), 'June '.concat(year)];
        }
        break;
      case '4':
        {
          return ['July '.concat(year), 'August '.concat(year)];
        }
        break;
      case '5':
        {
          return ['September '.concat(year), 'October '.concat(year)];
        }
        break;
      case '6':
        {
          return ['November '.concat(year), 'December '.concat(year)];
        }
        break;
    }
  }
  if (periodType === 'Quarterly') {
    switch (periodIdentifier) {
      case '1':
        {
          return [
            'January '.concat(year),
            'February '.concat(year),
            'March '.concat(year)
          ];
        }
        break;
      case '2':
        {
          return [
            'April '.concat(year),
            'May '.concat(year),
            'June '.concat(year)
          ];
        }
        break;
      case '3':
        {
          return [
            'July '.concat(year),
            'August '.concat(year),
            'September '.concat(year)
          ];
        }
        break;
      case '4':
        {
          return [
            'October '.concat(year),
            'November '.concat(year),
            'December '.concat(year)
          ];
        }
        break;
    }
  }
  if (periodType === 'SixMonthly') {
    switch (periodIdentifier) {
      case '1':
        {
          return [
            'January '.concat(year),
            'February '.concat(year),
            'March '.concat(year),
            'April '.concat(year),
            'May '.concat(year),
            'June '.concat(year)
          ];
        }
        break;
      case '2':
        {
          return [
            'July '.concat(year),
            'August '.concat(year),
            'September '.concat(year),
            'October '.concat(year),
            'November '.concat(year),
            'December '.concat(year)
          ];
        }
        break;
    }
  }
  if (periodType === 'Yearly') {
    return [
      'January '.concat(year),
      'February '.concat(year),
      'March '.concat(year),
      'April '.concat(year),
      'May '.concat(year),
      'June '.concat(year),
      'July '.concat(year),
      'August '.concat(year),
      'September '.concat(year),
      'October '.concat(year),
      'November '.concat(year),
      'December '.concat(year)
    ];
  }
}
