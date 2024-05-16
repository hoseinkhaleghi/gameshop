import Button from '../../components/common/Button/Button';
import Input from '../../components/common/input/Input';

function Settings() {
  return (
    <div>
      <section className="flex flex-col mt-3 gap-5">
        <h1 className="text-3xl font-semibold">تنظیمات</h1>
        <p className="text-base">آدرس ایمیل شما</p>
        <Input></Input>
        <p className="text-base">تلفن همراه شما</p>
        <Input></Input>
        <p className="text-base">رمز عبور شما</p>
        <Input></Input>
        <p className="text-base">آدرس شما</p>
        <Input></Input>
        <p className="text-base">کد پستی شما</p>
        <Input></Input>
        <Button>ذخیره تغییرات</Button>
      </section>
    </div>
  );
}

export default Settings;
