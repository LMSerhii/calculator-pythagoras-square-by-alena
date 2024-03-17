import css from './Square.module.css';

export default function Square() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <div className={css.leftTop}>
          <div className={css.leftTopFirst}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className={css.leftTopSecond}>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className={css.leftTopThird}>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
        </div>
        <div className={css.leftDown}>
          <div>10</div>
          <div>11</div>
          <div>12 </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.rightTop}>
          <div>13</div>
          <div>14</div>
          <div>15</div>
        </div>
        <div className={css.rightDown}>
          <div>16</div>
        </div>
      </div>
    </div>
  );
}
