/* eslint-disable @next/next/no-img-element */
'use client'
import 'animate.css';
import styles from './home.module.scss'
import { Item } from '@/components/Item/index'
import { ProdData } from '@/data/productsData'
import { useCart } from '@/contexts/CartContext';
import { Dropdown } from '@/components/dropdown';
import { useDropdown } from '@/contexts/DropDownContext';



export default function Home() {

  const Cart = useCart();
  const DropDown = useDropdown();

  function handleDispatch(item: any) {
    Cart?.dispatchItem({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        category: item.category,
      }
    })
  }

  return (
    <main className={styles.HomeWrapper}>
      <div className={styles.titleHome}>
        <h2 className='animate__animated animate__fadeInLeftBig '>Iphone 14 PRO</h2>
      </div>
      <img
        src="https://pngimg.com/d/iphone_14_PNG48.png"
        alt="foto iphone 14 PRO"
        loading='lazy'
        className={styles.ImgHome}
      />

      <Dropdown.Root>
        <Dropdown.Text />
        <Dropdown.Icon />
        <Dropdown.Options />
      </Dropdown.Root>

      <div className={styles.homeMain}>
        {ProdData.map((item, index) => item.category == DropDown?.filter ?
          <Item.Root key={index}>
            <Item.Image imgURL={item.image} ImageDescription={item.description} />
            <Item.Title title={item.name} />
            <Item.Description description={item.description} />
            <Item.Price price={item.price} />
            <Item.AddCart onClick={() => handleDispatch(item)} />
          </Item.Root>
          : null)
        }
      </div>

    </main>
  )
}
