import { Injectable } from '@angular/core';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage';
// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime';
// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs';
// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path';

@Injectable({
  providedIn: 'root'
})
export class NFTStorageService {
  // Paste your NFT.Storage API key into the quotes:
  readonly NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVkNWVBODExRTczQzcwYzhGMTBjZDdhODc1RjZEQkQ4MGYxODEwNTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTg1Mzc5OTc3OSwibmFtZSI6IkVUSExpdmUifQ.vtdZNYvtXHD3MEQntL0ZYw40cqKc2Sbm8Y3KacvYaYo';

  constructor() { }

  /**
    * Reads an image file from `imagePath` and stores an NFT with the given name and description.
    * @param {string} imagePath the path to an image file
    * @param {string} name a name for the NFT
    * @param {string} description a text description for the NFT
    */
  async storeNFT(image: File, name: string, description: string) {
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: this.NFT_STORAGE_KEY })
    // call client.store, passing in the image & metadata
    return nftstorage.store({
      image,
      name,
      description,
    });
  }
}