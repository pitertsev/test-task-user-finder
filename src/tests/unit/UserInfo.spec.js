import { mount } from '@vue/test-utils'
import UserInfo from '../../components/UserInfo'

describe('UsersInfo.vue', () => {
  it('Проверка разметки и содержимого', () => {
    const wrapper = mount(UserInfo, {
      propsData: {
        user: {
          login: 'Test User',
          reposCount: 25
        }
      }
    })
    expect(wrapper.find('h1').text()).toBe("Пользователь: Test User")
    expect(wrapper.html().includes("ul")).toBeTruthy()
    expect(wrapper.findAll('li').at(0).text()).toBe("Логин пользователя: Test User")
    expect(wrapper.findAll('li').at(1).text()).toBe("Количество репозиториев: 25")
  })
})
