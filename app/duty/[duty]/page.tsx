import { kv } from '@vercel/kv';
import Link from 'next/link';

const getDayInMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const firstWeekDay = (date.getDay() + 6) % 7;
  const numberOfEmptyDays = Array(firstWeekDay).fill(null);
  const days = [...numberOfEmptyDays];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const Duty = async ({ params: { duty } }: { params: { duty: string } }) => {
  const decodedDuty = decodeURI(duty); // убрать значок % когда встречается в адресе пробел
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const daysInMonth = getDayInMonth(currentMonth, currentYear);

  return (
    <main className={'container relative flex flex-col gap-8 px-12 pt-16'}>
      <h1 className={'text-2xl font-light text-center text-white font-display'}>{decodedDuty}</h1>

      <Link href={'/'} className={'flex items-center font-sans text-xs text-white'}>
        ~Back
      </Link>

      <section className={'w-full my-2 rounded-md bg-neutral-800'}>
        <div className={'flex justify-between mx-2 my-4 font-sans text-neutral-400'}>
          <button>&#8592;</button>
          <span>November</span>
          <button>&#8594;</button>
        </div>

        <div className={'grid w-full grid-cols-7 mt-2'}>
          {weekDays.map(day => (
            <div className={'flex flex-col items-center p-2'} key={day}>
              <span className={'font-sans text-xs font-light text-neutral-200'}>{day}</span>
            </div>
          ))}

          {daysInMonth.map((day, index) => (
            <div className={'flex flex-col items-center p-2'} key={index}>
              <span className={'font-sans text-xs text-center font-light text-neutral-400'}>
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Duty;
