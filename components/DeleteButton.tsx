'use client';

import Image from 'next/image';
import { deleteDuty } from '@/app/actions';

const DeleteButton = ({ duty }: { duty: string }) => {
  return (
    <button onClick={() => deleteDuty(duty)}>
      <Image src={'/images/delete.svg'} alt={'Icon delete mark'} width={20} height={20} />
    </button>
  );
};

export default DeleteButton;
