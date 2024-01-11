import { Components, alpha } from '@mui/material'

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: 16,
        fontStyle: 'normal',
        textTransform: 'initial',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingRight: '32px',
        paddingLeft: '32px',
      },
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: {
          background: 'rgba(156,140,251,0.1)',
          color: '#9c8cfb',
          boxShadow: 'initial',
          ':hover': {
            color: 'white',
            background: 'rgba(156,140,251,0.7)',
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          border: '1px solid #f2f2f2',
        },
      },
    ],
  },
}
export default components
