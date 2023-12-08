<script setup lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormProps } from "ant-design-vue";

const formState = reactive({
  user: {
    email: "",
    password: "",
    remember: true,
  },
});

const validateMessages = {
  required: "Email is required!",
  types: {
    email: "Email is not a valid email!",
    number: "Email is not a valid number!",
  },
  number: {
    range: "${name} must be between ${min} and ${max}",
  },
};

const { login } = useStrapiAuth();
const router = useRouter();
const user = useStrapiUser(); //ได้ user
// const token = useStrapiToken(); //auto Cookie

const handleFinish: FormProps["onFinish"] = async (values: any) => {
  const { email, password } = formState.user;
  try {
    await login({ identifier: email, password: password });
    const userCookie = JSON.stringify(user.value?.email); // เข้าถึงค่า user ที่ได้จาก useStrapiUser
    console.log(userCookie);
    // alert(`ยินดีต้อนรับคุณ ,  กำลังพาคุณไปหน้า Dashboard *Loading...*`);
    // setTimeout(async () => {
    //   await router.push({ path: "/backend/dashboard" });
    // }, 2000);

    // const jwt = useCookie("strapi_jwt");
    // console.log(jwt._rawValue);
    router.push({ path: "/backend/dashboard" });
  } catch (e: any) {
    alert(
      `error : ${e.error.status} ${e.error.name}`
      // กรุณาตรวจสอบ Email : ${email} และ Password : ${password}
    );
  }
};

const handleFinishFailed: FormProps["onFinishFailed"] = (errors: any) => {
  alert(errors.errorFields);
};
</script>

<template>
  <MyPageTitle
    pagetitle="ลงทะเบียนรับประกัน"
    pagedescription="วิธีการติดตั้ง และ ข่าวสารหญ้าเทียม"
  />

  <section class="font-poppins">
    <div
      class="relative z-10 lg:flex items-center h-fit pb-12 lg:py-24 overflow-hidden"
    >
      <div class="relative max-w-6xl px-4 mx-auto">
        <div class="justify-center max-w-xl mx-auto lg:max-w-4xl">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4 lg:w-2/5">
              <div class="z-10 w-full p-10 shadow-md bg-gray-50 rounded-lg">
                <h2 class="text-xl font-bold leading-tight mb-7 md:text-2xl">
                  เข้าสู่ระบบ
                </h2>
                <div>
                  <a-form
                    autocomplete="off"
                    layout="inline"
                    v-model:model="formState"
                    @finish="handleFinish"
                    @finishFailed="handleFinishFailed"
                    class="flex flex-col gap-5"
                    :validate-messages="validateMessages"
                  >
                    <!-- label="Email" -->
                    <a-form-item
                      :name="['user', 'email']"
                      :rules="[{ type: 'email' }]"
                    >
                      <a-input
                        v-model:value="formState.user.email"
                        placeholder="Email"
                        autocomplete="false"
                        class="h-12 text-lg"
                      >
                        <template #prefix>
                          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                      </a-input>
                    </a-form-item>
                    <a-form-item>
                      <a-input
                        v-model:value="formState.user.password"
                        type="password"
                        placeholder="Password"
                        class="h-12 text-lg"
                      >
                        <template #prefix>
                          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                      </a-input>
                    </a-form-item>
                    <div class="flex mx-auto">
                      <a-form-item>
                        <a-form-item name="remember" no-style>
                          <a-checkbox v-model:checked="formState.user.remember"
                            >Remember me</a-checkbox
                          >
                        </a-form-item>
                        <NuxtLink class="login-form-forgot ml-2" to=""
                          >Forgot password</NuxtLink
                        >
                      </a-form-item>
                    </div>
                    <a-form-item>
                      <a-button
                        type="primary"
                        html-type="submit"
                        :disabled="
                          formState.user.email === '' ||
                          formState.user.password === ''
                        "
                        class="bg-blue-600 w-full h-12 font-bold text-lg"
                      >
                        Log in
                      </a-button>
                    </a-form-item>
                  </a-form>
                </div>
              </div>
            </div>
            <div class="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
              <span
                class="flex items-center justify-center w-20 h-20 mx-auto rounded-lg text-gray-900 bg-blue-600 rounded-lgdark:bg-yellow-300 mb-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </span>
              <p
                class="mb-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                ลงทะเบียนรับประกันตอนนี้ รับวันประกันเพิ่มฟรี
              </p>
              <div class="flex justify-center">
                <button
                  class="block w-full rounded-lg bg-blue-600 px-12 py-3 font-bold text-white shadow hover:bg-blue-700 duration-200 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                >
                  สมัครเลย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
