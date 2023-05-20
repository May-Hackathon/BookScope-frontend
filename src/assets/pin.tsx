const Pin = ({fill, className}: {fill?: string, className?: string}) => {
  return <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.7211 13.6065C7.23532 13.9187 7.77116 14.1689 8.31692 14.3501L3.95426 21.5363C3.72114 21.9203 3.18906 22.0327 2.78002 21.7844L1.28411 20.8762C0.87507 20.6279 0.729308 20.104 0.962428 19.72L5.32509 12.5338C5.73765 12.9344 6.20688 13.2943 6.7211 13.6065ZM13.9678 1.66972C17.2752 3.67759 18.4262 7.81476 16.5412 10.9196C14.6563 14.0245 10.4547 14.9122 7.14737 12.9043C3.84 10.8965 2.68899 6.7593 4.57392 3.65442C6.45886 0.549539 10.6604 -0.338149 13.9678 1.66972ZM12.4758 4.12729C12.6862 4.255 12.943 4.20073 13.0629 4.00325C13.1828 3.80577 13.1125 3.55284 12.9021 3.42513C10.6349 2.04871 7.73597 2.66118 6.44382 4.78961C6.32393 4.98709 6.3943 5.24002 6.60466 5.36773C6.81502 5.49544 7.07188 5.44117 7.19177 5.24369C8.2508 3.49925 10.6176 2.9992 12.4758 4.12729Z" fill={fill||"#8FBB9F"}/>
  </svg>
}

export {Pin}