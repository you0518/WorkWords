import {Mutation, VuexModule, Action, Module, getModule} from "vuex-module-decorators"
import Vuex from 'vuex'
export interface IImageState {
  url: string
  color: string
  title: string
  content: string
  auther: string
}

const store = new Vuex.Store({})

@Module({dynamic: true, name: 'Image', store})
class Image extends VuexModule {
  private ImageInfo: IImageState = {
    url: "",
    color: "",
    title: "",
    content: "",
    auther: ""
  }


  @Mutation
  private SET_IMAGE(ImageInfo: IImageState) {
    this.ImageInfo = ImageInfo;
  }

  @Action({})
  public setImage(ImageInfo: IImageState) {
    this.SET_IMAGE(ImageInfo)
  }
  get getImageInfo(): IImageState {
    return this.ImageInfo
  }
}

export default getModule(Image);