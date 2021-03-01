import * as React from 'react'
import './A4.css'

export interface A4Props {}

export const A4: React.FC<A4Props> = ({ ...props }) =>{ return (
  <div className="page_bg">
    <section className="pageA4" {...props}>
      {props.children}
    </section>
  </div>
  )
};
