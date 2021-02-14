import React, {useCallback, useEffect, useMemo} from 'react';
import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setFilteredFilmsTC} from "../../redux/films-reducer";

type FilterItems = {
  id: number
  name: string
}

type PropsType = {
  filterLabel: string
  filterItems: Array<FilterItems>
}

export const MySelect = React.memo(function (props: PropsType) {
  console.log('Select');

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  );

  const classes = useStyles();

  let [statusApi, setStatus] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
    dispatch(setFilteredFilmsTC(event.target.value as string))
  }, [statusApi, dispatch]);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{props.filterLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={statusApi}
          onChange={handleChange}
          label={props.filterLabel}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {useMemo(() => {
            return props.filterItems.map(f => {
              return <MenuItem key={f.id} value={f.id}>{f.name}</MenuItem>
            })
          }, [props.filterItems])}
        </Select>
      </FormControl>
    </>
  );
})

