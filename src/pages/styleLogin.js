import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
	root: {
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		display: 'flex',
		flexWrap: 'wrap',
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: 600,
	},
  formControl: {
    minWidth: 285,
  },
  FormInput: {
    '& > *': {
      width: 600,
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
  FormReturnRoot: {
    color: '#043e4b',
  },
  FormReturnTitle: {
    color: '#808080',
  },
}));
