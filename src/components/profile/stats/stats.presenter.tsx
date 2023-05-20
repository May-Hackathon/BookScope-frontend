import Styles from "./stats.module.scss";

type ItemProps = {
  name: string;
  value: string;
  unit: string;
}

const StatsItem = ({name,value,unit}:ItemProps) => {
  return <div className={Styles.item}>
    <span className={Styles.title}>{name}</span>
    <span className={Styles.value}>{value}</span>
    <span className={Styles.unit}>{unit}</span>
  </div>
}

type props = {
  bookCount: number;
  reportCount: number;
  totalPrice: number;
  totalPage: number;
}

const Stats = ({bookCount,reportCount,totalPrice,totalPage}:props) => {
  return <div className={Styles.wrapper}>
    <div className={Styles.row}>
      <div className={Styles.itemWrapper}>
        <StatsItem name={"合計冊数"} value={bookCount.toString()} unit={"冊"}/>
      </div>
      <div className={Styles.itemWrapper}>
        <StatsItem name={"合計感想分数"} value={bookCount.toString()} unit={"枚"}/>
      </div>
    </div>
    <div className={Styles.row}>
      <div className={Styles.itemWrapper}>
        <StatsItem name={"合計金額"} value={bookCount.toString()} unit={"円"}/>
      </div>
      <div className={Styles.itemWrapper}>
        <StatsItem name={"合計ページ数"} value={bookCount.toString()} unit={"ページ"}/>
      </div>
    </div>
  </div>
}

export {Stats}